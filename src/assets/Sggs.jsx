/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/sggs.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei' 
import { usePlay } from '../context/Play'

export function Sggs(props) {
  const { nodes, materials } = useGLTF('models/sggs.gltf')
  
  const { setPage, setId} = usePlay();
  // console.log(page,",",id);

  return (
    <group {...props} dispose={null}>
      <group position={[-12.856, 0, 2.166]} rotation={[-Math.PI / 2, 0, 0.861]}>
        <mesh geometry={nodes.Object_10007.geometry} material={materials.lambert8SG} />
        <mesh geometry={nodes.Object_11001.geometry} material={materials.lambert9SG} />
        <mesh geometry={nodes.Object_12001.geometry} material={materials['phong2SG.001']} />
        <mesh geometry={nodes.Object_2003.geometry} material={materials.anisotropic1SG} />
        <mesh geometry={nodes.Object_3003.geometry} material={materials.anisotropic2SG} />
        <mesh geometry={nodes.Object_4003.geometry} material={materials['initialShadingGroup.001']} />
        <mesh geometry={nodes.Object_5003.geometry} material={materials['initialShadingGroup.001']} />
        <mesh geometry={nodes.Object_6002.geometry} material={materials['initialShadingGroup.001']} />
        <mesh geometry={nodes.Object_7003.geometry} material={materials['lambert2SG.001']} />
        <mesh geometry={nodes.Object_8002.geometry} material={materials['lambert5SG.001']} />
        <mesh geometry={nodes.Object_9004.geometry} material={materials.lambert8SG} />
      </group>
      <group position={[1.953, 1.783, -0.004]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Gym_Asset_GYMrig_initialShadingGroup1_0.geometry} material={materials.GYMrig_initialShadingGroup1} position={[1.293, -1.759, -2.311]} rotation={[0, -0.681, 0]} />
        </group>
      </group>
      <mesh geometry={nodes.Buses.geometry} material={materials.CarEdges} position={[1.976, 0.221, 4.511]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object_342001.geometry} material={materials.Bus3} position={[2.01, 0, 0.714]} />
        <mesh geometry={nodes.Object_347001.geometry} material={materials.CarEdges} position={[2.01, 0, 0.714]} />
        <mesh geometry={nodes.Object_348001.geometry} material={materials.CarFront} position={[2.01, 0, 0.714]} />
        <mesh geometry={nodes.Object_350001.geometry} material={materials.blac} position={[2.01, 0, 0.714]} />
        <mesh geometry={nodes.Object_351001.geometry} material={materials.Edges} position={[2.01, 0, 0.714]} />
        <mesh geometry={nodes.Object_353001.geometry} material={materials['Blue.005']} position={[3.061, 0, 0]} />
        <mesh geometry={nodes.Object_358001.geometry} material={materials.CarEdges} position={[3.061, 0, 0]} />
        <mesh geometry={nodes.Object_361001.geometry} material={materials.blac} position={[3.061, 0, 0]} />
        <mesh geometry={nodes.Object_362001.geometry} material={materials.Edges} position={[3.061, 0, 0]} />
        <mesh geometry={nodes.Object_364001.geometry} material={materials.Bus1} />
        <mesh geometry={nodes.Object_372001.geometry} material={materials.blac} />
        <mesh geometry={nodes.Object_373001.geometry} material={materials.Edges} />
      </mesh>
      <mesh geometry={nodes.Trees002.geometry} material={materials.Leaves} position={[5.837, -0.048, 7.548]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes.Textile.geometry} material={materials.lambert35SG} position={[-0.963, 0, -0.195]} rotation={[-Math.PI / 2, 0, -0.755]}>
        <mesh geometry={nodes.Textile002.geometry} material={materials.lambert35SG} position={[0.005, 0.471, 0]} />
      </mesh>
      <mesh onClick={(e) => {setPage(true); setId(1)}} geometry={nodes.Text_Swapnil.geometry} material={materials['Material of name']} position={[9.963, 0.008, 9.252]} />
      <mesh onClick={(e) => {setPage(true); setId(5)}} geometry={nodes.Text_rnxg.geometry} material={materials['Material of name']} position={[0.208, 0.35, -1.533]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onClick={(e) => {setPage(true); setId(11)}} geometry={nodes.Text_boysC.geometry} material={materials['Material of name']} position={[-13.39, 1.366, 2.623]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onClick={(e) => {setPage(true); setId(10)}} geometry={nodes.Text_boysH.geometry} material={materials['Material of name']} position={[-10.578, 1.761, -0.038]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onClick={(e) => {setPage(true); setId(9)}} geometry={nodes.Text_cse.geometry} material={materials['Material of name']} position={[-5.535, 1.196, -2.624]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onClick={(e) => {setPage(true); setId(8)}} geometry={nodes.Text_production.geometry} material={materials['Material of name']} position={[-3.721, 0.962, -4.53]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onClick={(e) => {setPage(true); setId(7)}} geometry={nodes.Text_Textile_civil.geometry} material={materials['Material of name']} position={[-3.383, 1.197, -1.501]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.rnxg.geometry} material={materials.World_ap} position={[0.142, -0.013, -1.47]} rotation={[Math.PI / 2, 0, -0.818]} />
      <mesh geometry={nodes.Production.geometry} material={materials.lambert44SG} position={[-3.423, 0.003, -4.402]} rotation={[-Math.PI / 2, 0, -2.26]}>
        <mesh geometry={nodes.Object_10006.geometry} material={materials.lambert51SG} position={[-0.135, -0.013, 0]} />
      </mesh>
      <mesh onClick={(e) => {setPage(true); setId(6)}} geometry={nodes.Instrumentation_and_electrical_name.geometry} material={materials['Material of name']} position={[-2.116, 1.384, 0.323]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.icescream_house_Xanh_nhat_0001.geometry} material={materials.Xanh_nhat} position={[0.86, 0.299, -4.22]} rotation={[-Math.PI / 2, 0, -0.721]}>
        <mesh geometry={nodes.icescream_house_Burger_Shop_Coffee_HouseBlack_0001.geometry} material={materials.Burger_Shop_Coffee_HouseBlack}>
          <mesh geometry={nodes.icescream_house_Blue_0001.geometry} material={materials.Blue} />
          <mesh geometry={nodes.icescream_house_Burger_Shop_Coffee_HouseBrown_Dam_0001.geometry} material={materials.Burger_Shop_Coffee_HouseBrown_Dam} />
          <mesh geometry={nodes.icescream_house_Burger_Shop_Coffee_HouseWhite_0001.geometry} material={materials.Burger_Shop_Coffee_HouseWhite} />
          <mesh geometry={nodes.icescream_house_Cam_Nhat_0001.geometry} material={materials.Cam_Nhat} />
          <mesh geometry={nodes.icescream_house_Do_do_0001.geometry} material={materials.Do_do} />
          <mesh geometry={nodes.icescream_house_Hong_Dam_0001.geometry} material={materials.Hong_Dam} />
          <mesh geometry={nodes.icescream_house_lambert1_0001.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.icescream_house_Trang_0001.geometry} material={materials.Trang} />
          <mesh geometry={nodes.icescream_house_Xanh_Kinh_0001.geometry} material={materials.Xanh_Kinh} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.Hostel_Girls.geometry} material={materials.lambert12SG} position={[9.892, 0, 5.303]} rotation={[Math.PI / 2, 0, -2.48]} />
      <group position={[1.928, 0, 1.021]}>
        <mesh geometry={nodes.Plane.geometry} material={materials.Green} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.Concrete} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.GreenLight} />
        <mesh geometry={nodes.Entc.geometry} material={materials.lambert44SG} position={[-3.426, 0.007, 2.613]} rotation={[-Math.PI / 2, 0, -2.26]}>
          <mesh geometry={nodes.Object_10002.geometry} material={materials.lambert51SG} position={[-0.202, -0.089, 0]} />
        </mesh>
        <group position={[2.633, 0.659, 7.297]} rotation={[0, 0.053, 0]}>
          <mesh geometry={nodes.Cube001.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Cube001_1.geometry} material={materials.gray} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials.blue} />
          <mesh onClick={(e) => {setPage(true); setId(13)}} geometry={nodes.sggs_name.geometry} material={materials.Glowing} position={[-0.719, 0.019, 0.198]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <mesh geometry={nodes.Object_184001.geometry} material={materials.material_0} position={[1.037, -0.048, 6.859]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes.Object_184002.geometry} material={materials.material_0} position={[3.91, -0.048, 6.528]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes.Object_184003.geometry} material={materials.material_0} position={[-1.143, -0.048, -2.677]} rotation={[0, 0.904, 0]} />
        <mesh geometry={nodes.Object_184004.geometry} material={materials.material_0} position={[-2.438, -0.027, -1.1]} rotation={[0, 0.904, 0]}>
          <mesh geometry={nodes.Canteen.geometry} material={materials.Xanh_lo} position={[-1.448, 0.046, -2.886]} rotation={[-Math.PI / 2, 0, -1.688]}>
            <mesh geometry={nodes.house_Blue_0001.geometry} material={materials.Blue} />
            <mesh geometry={nodes.house_Burger_Shop_Coffee_HouseWhite_0001.geometry} material={materials.Burger_Shop_Coffee_HouseWhite} />
            <mesh geometry={nodes.house_Trang_0001.geometry} material={materials.Trang} />
            <mesh geometry={nodes.house_Xam_xanh_0001.geometry} material={materials['Xam_xanh.001']} />
            <mesh geometry={nodes.house_Xam_xanh_dam_0001.geometry} material={materials.Xam_xanh_dam} />
            <mesh geometry={nodes.house_Xanh_Kinh_0001.geometry} material={materials.Xanh_Kinh} />
            <mesh geometry={nodes.house_Xanh_la_0001.geometry} material={materials['Xanh_la.001']} />
          </mesh>
        </mesh>
        <mesh geometry={nodes.Object_186001.geometry} material={materials.Leaves} position={[1.063, 0.451, 6.023]} rotation={[Math.PI, -0.033, Math.PI]} />
        <mesh geometry={nodes.Object_186002.geometry} material={materials.Leaves} position={[3.936, 0.451, 5.691]} rotation={[Math.PI, -0.033, Math.PI]} />
        <mesh geometry={nodes.Object_187002.geometry} material={materials.Wood} position={[1.063, 0.451, 6.023]} rotation={[Math.PI, -0.033, Math.PI]} />
        <mesh geometry={nodes.Object_187003.geometry} material={materials.Wood} position={[3.936, 0.451, 5.691]} rotation={[Math.PI, -0.033, Math.PI]} />
        <mesh geometry={nodes.Object_189004.geometry} material={materials.Leaves} position={[-0.783, 0.553, -2.976]} rotation={[-Math.PI, 1.507, -Math.PI]} />
        <mesh geometry={nodes.Object_189005.geometry} material={materials.Leaves} position={[-2.033, 0.573, -1.551]} rotation={[-Math.PI, 1.507, -Math.PI]} />
        <mesh geometry={nodes.Object_190003.geometry} material={materials.Wood} position={[-0.783, 0.553, -2.976]} rotation={[-Math.PI, 1.507, -Math.PI]} />
        <mesh geometry={nodes.Object_190004.geometry} material={materials.Wood} position={[-2.033, 0.573, -1.551]} rotation={[-Math.PI, 1.507, -Math.PI]} />
        <mesh geometry={nodes.Object_192001.geometry} material={materials.Wood} position={[1.116, -0.042, 5.104]} rotation={[0, 0.377, 0]} />
        <mesh geometry={nodes.Object_192002.geometry} material={materials.Wood} position={[3.989, -0.042, 4.773]} rotation={[0, 0.377, 0]} />
        <mesh geometry={nodes.Object_193002.geometry} material={materials.Leaves} position={[1.116, -0.042, 5.104]} rotation={[0, 0.377, 0]} />
        <mesh geometry={nodes.Object_193003.geometry} material={materials.Leaves} position={[3.989, -0.042, 4.773]} rotation={[0, 0.377, 0]} />
        <group position={[2.588, 0.003, 6.363]} rotation={[0, 0.035, 0]}>
          <mesh geometry={nodes.Plane001.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Plane001_1.geometry} material={materials['Road Black']} />
          <mesh geometry={nodes.Plane001_2.geometry} material={materials['Road White']} />
          <mesh geometry={nodes.Plane001_3.geometry} material={materials.Footpath} />
          <mesh geometry={nodes.Plane001_4.geometry} material={materials.Green} />
          <mesh geometry={nodes.Light_Poll.geometry} material={materials['Pole.001']} position={[0.023, 0.79, -1.638]} rotation={[0, 1.535, 0]} />
          <mesh geometry={nodes.Light_Poll001.geometry} material={materials['Pole.001']} position={[0.001, 0.79, -0.783]} rotation={[Math.PI, -1.535, Math.PI]} />
          <mesh geometry={nodes.Light_Poll002.geometry} material={materials['Pole.001']} position={[0.017, 0.729, 0.148]} rotation={[0, 1.535, 0]} />
        </group>
        <mesh geometry={nodes.Trees001.geometry} material={materials.Leaves} position={[1.037, -0.048, 6.859]} rotation={[0, 1.571, 0]} />
        <mesh geometry={nodes.Trees003.geometry} material={materials.Leaves} position={[-1.143, -0.048, -2.677]} rotation={[0, 0.904, 0]} />
        <mesh geometry={nodes.Trees004.geometry} material={materials.Leaves} position={[-2.438, -0.027, -1.1]} rotation={[0, 0.904, 0]} />
      </group>
      <mesh onClick={(e) => {setPage(true); setId(3)}} geometry={nodes.Girl_Hostel_name.geometry} material={materials['Material of name']} position={[8.962, 0.735, 3.767]} rotation={[Math.PI / 2, 0, 0.655]} />
      <mesh onClick={(e) => {setPage(true); setId(4)}} geometry={nodes['E&Tc_name'].geometry} material={materials['Material of name']} position={[-1.391, 1.336, 4.378]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.CSE.geometry} material={materials.lambert35SG} position={[-3.927, 0, -0.757]} rotation={[-Math.PI / 2, 0, -2.278]}>
        <mesh geometry={nodes.Object_10003.geometry} material={materials.lambert51SG} position={[0.074, -1.725, 0.007]} rotation={[-0.025, 0.011, -1.617]} />
        <mesh geometry={nodes.Textile001.geometry} material={materials.lambert35SG} position={[-3.326, -1.728, 0]} rotation={[0, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Textile003.geometry} material={materials.lambert35SG} position={[-1.285, -1.747, 0]} rotation={[0, 0, Math.PI / 2]} />
      </mesh>
      <mesh geometry={nodes.cixil.geometry} material={materials.lambert35SG} position={[-1.79, 0, -2.493]} rotation={[-Math.PI / 2, 0, -0.755]}>
        <mesh geometry={nodes.Object_10004.geometry} material={materials.lambert51SG} position={[-0.031, -1.071, 0.005]} rotation={[-0.002, -0.004, -3.126]} />
        <mesh geometry={nodes.Object_10010.geometry} material={materials.lambert51SG} position={[2.156, -2.202, 0.005]} rotation={[-0.002, -0.004, -3.126]} />
        <mesh geometry={nodes.Textile004.geometry} material={materials.lambert35SG} position={[0.005, 0.471, 0]} />
      </mesh>
      <group position={[-8.951, 0.004, 2.073]} rotation={[-Math.PI / 2, 0, -2.328]}>
        <mesh geometry={nodes.Plane_Material003_0001.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane_Material003_0001_1.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube009_Material004_0.geometry} material={materials['material_0.001']} position={[-1.145, 0.001, 0.021]} rotation={[0, 0, -3.138]}>
          <mesh geometry={nodes.Circle001_Material005_0.geometry} material={materials['Material.005']} position={[-0.26, 0, 0.541]} />
          <mesh geometry={nodes.Cube009_Material012_0.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Cylinder002__0.geometry} material={materials.Cylinder__0} position={[-0.26, 0, 0.496]} />
          <mesh geometry={nodes.Plane003_Material004_0.geometry} material={materials['material_0.001']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
          <mesh geometry={nodes.Plane003_Material005_0.geometry} material={materials['Material.005']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
          <mesh geometry={nodes.Plane003_Material006_0.geometry} material={materials['Material.006']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
        </mesh>
        <mesh geometry={nodes.Cube009_Material004_0001.geometry} material={materials['material_0.001']} position={[1.12, 0.003, 0.021]} rotation={[0, 0, 0.004]}>
          <mesh geometry={nodes.Circle001_Material005_0001.geometry} material={materials['Material.005']} position={[-0.26, 0, 0.541]} />
          <mesh geometry={nodes.Cube009_Material012_0001.geometry} material={materials['Material.012']} />
          <mesh geometry={nodes.Cylinder002__0001.geometry} material={materials.Cylinder__0} position={[-0.26, 0, 0.496]} />
          <mesh geometry={nodes.Plane003_Material004_0001.geometry} material={materials['material_0.001']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
          <mesh geometry={nodes.Plane003_Material005_0001.geometry} material={materials['Material.005']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
          <mesh geometry={nodes.Plane003_Material006_0001.geometry} material={materials['Material.006']} position={[-0.175, 0, 0.627]} rotation={[-1.788, -1.567, 2.925]} />
        </mesh>
      </group>
      <group position={[3.997, -0.002, 1.763]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials.Concrete} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials.HouseRoof4} />
        <mesh geometry={nodes.Circle002_3.geometry} material={materials.Burger_Shop_Coffee_HouseBlack} />
        <mesh geometry={nodes.Circle002_4.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Circle002_5.geometry} material={materials.lambert44SG} />
        <mesh geometry={nodes.Circle002_6.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Poll.geometry} material={materials.med_diffuse} position={[2.535, -0.113, 0.423]} rotation={[-Math.PI / 2, 0, 0]} />
        <group position={[0.462, 1.026, 0.556]}>
          <mesh geometry={nodes.Sphere_1.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Sphere_2.geometry} material={materials.glass2} />
        </group>
      </group>
      <mesh onClick={(e) => {setPage(true); setId(2)}} geometry={nodes.Admin_name.geometry} material={materials['Material of name']} position={[4.071, 1.573, 2.335]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.a_complex.geometry} material={materials.lambert8SG} position={[0.892, 0.022, 0.996]} rotation={[-Math.PI / 2, 0, 2.415]} />
      <mesh onClick={(e) => {setPage(true); setId(12)}} geometry={nodes.Text_sports.geometry} material={materials['Material of name']} position={[-7.438, 0.637, 4.406]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('models/sggs.gltf')