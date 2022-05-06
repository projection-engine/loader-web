import useEngineEssentials, {ENTITY_ACTIONS} from "./engine/useEngineEssentials";
import SYSTEMS from "./engine/templates/SYSTEMS";
import {useEffect, useMemo, useState} from "react";
import MeshInstance from "./engine/instances/MeshInstance";
import MaterialInstance from "./engine/instances/MaterialInstance";
import COMPONENTS from "./engine/templates/COMPONENTS";
import Entity from "./engine/basic/Entity";
import DirectionalLightComponent from "./engine/components/DirectionalLightComponent";
import SkylightComponent from "./engine/components/SkyLightComponent";
import MeshComponent from "./engine/components/MeshComponent";
import PointLightComponent from "./engine/components/PointLightComponent";
import SkyboxComponent from "./engine/components/SkyboxComponent";
import SpotLightComponent from "./engine/components/SpotLightComponent";
import MaterialComponent from "./engine/components/MaterialComponent";
import TransformComponent from "./engine/components/TransformComponent";
import Transformation from "./engine/instances/Transformation";
import FolderComponent from "./engine/components/FolderComponent";
import PhysicsBodyComponent from "./engine/components/PhysicsBodyComponent";
import CubeMapComponent from "./engine/components/CubeMapComponent";
import CubeMapInstance from "./engine/instances/CubeMapInstance";
import CameraComponent from "./engine/components/CameraComponent";
import ScriptComponent from "./engine/components/ScriptComponent";
import Renderer from "./engine/Renderer";

const DATA_TYPES = {
    ENTITY: 0,
    MATERIAL: 1,
    MESH: 2,
    SCRIPT: 3
}
export default function useLoader(id, loader) {
    const {
        meshes, setMeshes,
        materials, setMaterials,
        entities, dispatchEntities,
        scripts, setScripts,
        gpu
    } = useEngineEssentials(id)
    const [canRender, setCanRender] = useState(true)
    const [settings, setSettings] = useState({
        fxaa: true,
        meshes,
        gamma: 2.2,
        exposure: 1,
        materials: [],
        noRSM: true,
        bloom: true,
        filmGrain: true,
        filmGrainStrength: .07,
        bloomStrength: .1,
        bloomThreshold: .75,
    })

    const renderer = useMemo(() => {
        if (gpu)
            return new Renderer(gpu, {w: window.screen.width, h: window.screen.height}, [SYSTEMS.MESH, SYSTEMS.SHADOWS, SYSTEMS.SCRIPT, SYSTEMS.TRANSFORMATION, SYSTEMS.CUBE_MAP, SYSTEMS.PICK])
        return undefined
    }, [gpu])
    useEffect(() => {
        loader.importAll()
            .then(async result => {
                let m = [], s = [], e = [], mat = [], promises = []
                for (let i in result) {
                    const {type, data, id} = result[i]
                    switch (type) {
                        case DATA_TYPES.ENTITY:
                            e.push(await mapEntity(data, gpu))
                            break
                        case DATA_TYPES.MATERIAL:
                            promises.push(new Promise(resolve => {
                                const material = new MaterialInstance(
                                    gpu,
                                    data.vertexShader,
                                    data.shader, data.uniformData, data.settings, () => resolve(true),
                                    data.id
                                )
                                mat.push(material)
                            }))
                            break
                        case DATA_TYPES.MESH:
                            m.push(new MeshInstance(data))
                            break
                        case DATA_TYPES.SCRIPT:
                            s.push({
                                id,
                                executors: new data()
                            })
                            break
                    }
                }
                await Promise.all(promises)
                setMaterials(mat)
                setMeshes(m)
                setScripts(s)
                setSettings(loader.settings)
                dispatchEntities({type: ENTITY_ACTIONS.DISPATCH_BLOCK, payload: e})

                setCanRender(true)
            })
    }, [])
    useEffect(() => {
        if (canRender && renderer) {
            renderer.start()
        } else if (renderer)
            renderer.stop()
    }, [canRender])
    useEffect(() => {
        if (renderer) {
            renderer.updatePackage(entities, materials, meshes, {
                ...settings,
                canExecutePhysicsAnimation: true
            }, scripts)
        }
        return () => renderer?.stop()
    }, [
        meshes,
        materials,
        entities,
        gpu,
        id,
        renderer,
        canRender
    ])

    return {}
}

async function mapEntity(entity, gpu) {
    const parsedEntity = new Entity(entity.id, entity.name, entity.active, entity.linkedTo)
    parsedEntity.blueprintID = entity.blueprintID

    for (const k in entity.components) {
        if (typeof ENTITIES[k] === 'function') {
            let component = await ENTITIES[k](entity, k, gpu)
            if (component) {

                if (k !== COMPONENTS.MATERIAL)
                    Object.keys(entity.components[k]).forEach(oK => {
                        if (!oK.includes("__"))
                            component[oK] = entity.components[k][oK]
                    })
                parsedEntity.components[k] = component
            }
        }
    }
    return parsedEntity
}

const ENTITIES = {
    [COMPONENTS.DIRECTIONAL_LIGHT]: async (entity, k) => new DirectionalLightComponent(entity.components[k].id),
    [COMPONENTS.SKYLIGHT]: async (entity, k) => new SkylightComponent(entity.components[k].id),
    [COMPONENTS.MESH]: async (entity, k) => new MeshComponent(entity.components[k].id),

    [COMPONENTS.POINT_LIGHT]: async (entity, k) => new PointLightComponent(entity.components[k].id),
    [COMPONENTS.SKYBOX]: async (entity, k, gpu) => {
        const component = new SkyboxComponent(entity.components[k].id, gpu)
        // const fileData = await ProjectLoader.readFromRegistry(entity.components[k].imageID, fileSystem)
        // if (fileData) {
        //     const img = await ImageProcessor.getImageBitmap(fileData)
        //     component.imageID = entity.components[k].imageID
        //     component.blob = img
        // }
        return component
    },
    [COMPONENTS.SPOT_LIGHT]: async (entity, k) => new SpotLightComponent(entity.components[k].id),
    [COMPONENTS.MATERIAL]: async (entity, k, gpu) => {
        const newMat = new MaterialComponent(entity.components[k].id)

        newMat.materialID = entity.components[k].materialID
        // const toLoad = (entity.components[k].uniforms ? entity.components[k].uniforms : []).map(u => {
        //     if (u.type === DATA_TYPES.TEXTURE && u.modified)
        //         return new Promise(async resolve => {
        //             // const fileData = await ProjectLoader.readFromRegistry(u.value, fileSystem)
        //             // if (fileData) {
        //             //     let texture
        //             //     await new Promise(r => {
        //             //         const k = u.format
        //             //         texture = new TextureInstance(
        //             //             fileData,
        //             //             k.yFlip,
        //             //             gpu,
        //             //             gpu[k.internalFormat],
        //             //             gpu[k.format],
        //             //             true,
        //             //             false,
        //             //             gpu.UNSIGNED_BYTE,
        //             //             undefined,
        //             //             undefined,
        //             //             0,
        //             //             () => {
        //             //                 r()
        //             //             }
        //             //         )
        //             //     })
        //             //     resolve({key: u.key, value: texture.texture, changed: true})
        //             // }
        //         // })
        //     // else
        //         return new Promise(resolve => resolve(u))
        // })
        newMat.uniforms = entity.components[k].uniforms
        newMat.overrideMaterial = entity.components[k].overrideMaterial
        newMat.uniformValues = {}
        // const values = await Promise.all(toLoad)
        newMat.uniformValues = {...entity.components[k].uniformValues}
        // values.forEach(dd => {
        //     if (dd.changed)
        //         newMat.uniformValues[dd.key] = dd.value
        // })

        newMat.doubleSided = entity.components[k].doubleSided
        newMat.overrideMaterial = entity.components[k].overrideMaterial
        return newMat
    },
    [COMPONENTS.TRANSFORM]: async (entity, k) => {
        const component = new TransformComponent(entity.components[k].id, true)
        component.changed = true
        try {
            component.updateQuatOnEulerChange = false
            component.rotation = Transformation.getEuler(entity.components[k]._rotationQuat)
            component.updateQuatOnEulerChange = true
        } catch (e) {
        }
        return component
    },
    [COMPONENTS.FOLDER]: async (entity, k) => new FolderComponent(entity.components[k].id),
    [COMPONENTS.PHYSICS]: async (entity, k) => new PhysicsBodyComponent(entity.components[k].id),
    [COMPONENTS.CUBE_MAP]: async (entity, k, gpu) => {
        const component = new CubeMapComponent(entity.components[k].id)
        component.cubeMap = new CubeMapInstance(gpu, component.resolution)

        return component
    },
    // [COMPONENTS.COLLIDER]: (entity, k, meshes) => new ColliderComponent(entity.components[k].id, meshes.find(m => m.id === entity.components.MeshComponent.meshID)),
    [COMPONENTS.CAMERA]: async (entity, k) => new CameraComponent(entity.components[k].id),
    [COMPONENTS.SCRIPT]: async (entity, k) => new ScriptComponent(entity.components[k].id),

}