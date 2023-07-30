import { Html } from "@react-three/drei";
import { Color } from "three";



export const Names = () => {

    const nameinfo = [
        {
            id: 1,
            name: 'admin',
            position: [4.071, 1.573, 2.335],
            text: 'Admin',
        },
        {
            id: 2,
            name: 'rnxg',
            position: [0.208, 0.35, -1.533],
            text: 'RNXG',
        },
        {
            id: 3,
            name: 'entc',
            position: [-1.391, 1.336, 4.378],
            text: 'E&Tc',
        },
        {
            id: 4,
            name: 'instrumentation',
            position: [-2.116, 1.384, 0.323],
            text: 'Instrumentation & Electrical',
        },
        {
            id: 5,
            name: 'textile',
            position: [-3.383, 1.797, -1.501],
            text: 'Textile & Civil',
        },
        {
            id: 6,
            name: 'production',
            position: [-3.721, 1.262, -4.53],
            text: 'Production',
        },
        {
            id: 7,
            name: 'cse',
            position: [-5.535, 1.196, -2.624],
            text: 'CSE Mechanical & IT',
        },
        {
            id: 8,
            name: 'boysh',
            position: [-10.578, 1.761, -0.038],
            text: "Boy's Hostel",
        },
        {
            id: 9,
            name: 'boysc',
            position: [-13.39, 1.366, 2.623],
            text: "Boy's Canteen",
        },
        {
            id: 10,
            name: 'sports',
            position: [-7.438, 0.637, 4.406],
            text: 'Sports',
        },
        {
            id: 11,
            name: 'girlsh',
            position: [8.962, 0.735, 3.767],
            text: "Girl's Hostel",
        },
        {
            id: 12,
            name: 'swapnil',
            position: [9.963, 0.008, 9.252],
            text: 'By Swapnil Deshmukh',
        }
    ]

    return (
        <>
            <group>
                {nameinfo.map((info) => (
                    <Html key={info.id} eps={0} center position={info.position}>
                        <button className="text_names" >
                            <h2>{info.text}</h2>
                        </button>
                    </Html>
                ))}
            </group>
        </>
    );
};
