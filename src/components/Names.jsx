import { Html } from "@react-three/drei"; 


export const Names = () => {

    const nameinfo = [
        {
            id: 1,
            name: 'admin',
            position: [4.071, 1.573, 2.335],
            text: 'Admin',
            value: false
        },
        {
            id: 2,
            name: 'rnxg',
            position: [0.208, 0.35, -1.533],
            text: 'RNXG',
            value: false
        },
        {
            id: 3,
            name: 'entc',
            position: [-1.391, 1.336, 4.378],
            text: 'E&Tc',
            value: false
        },
        {
            id: 4,
            name: 'instrumentation',
            position: [-2.116, 1.384, 0.323],
            text: 'Instrumentation & Electrical',
            value: false
        },
        {
            id: 5,
            name: 'textile',
            position: [-3.383, 1.797, -1.501],
            text: 'Textile & Civil',
            value: false
        },
        {
            id: 6,
            name: 'production',
            position: [-3.721, 1.262, -4.53],
            text: 'Production',
            value: false
        },
        {
            id: 7,
            name: 'cse',
            position: [-5.535, 1.196, -2.624],
            text: 'CSE Mechanical & IT',
            value: false
        },
        {
            id: 8,
            name: 'boysh',
            position: [-10.578, 1.761, -0.038],
            text: "Boy's Hostel",
            value: false
        },
        {
            id: 9,
            name: 'boysc',
            position: [-13.39, 1.366, 2.623],
            text: "Boy's Canteen",
            value: false
        },
        {
            id: 10,
            name: 'sports',
            position: [-7.438, 0.637, 4.406],
            text: 'Sports',
            value: false
        },
        {
            id: 11,
            name: 'girlsh',
            position: [8.962, 0.735, 3.767],
            text: "Girl's Hostel",
            value: false
        },
        {
            id: 12,
            name: 'swapnil',
            position: [9.963, 0.008, 9.252],
            text: 'By Swapnil Deshmukh',
            value: false
        }
    ]
 
  const handleButtonClick = (e) => {
    // Perform any actions you need before navigating to the Admin page
    console.log('Button clicked!');

    // Now, navigate to the Admin page
    e.display = true;
  };

    return (
        <>
            <group>
                {nameinfo.map((info) => (
                    <Html prepend={true} center={true} className="content" key={info.id}  position={info.position}> 
                        <button className="text_names"><h1>{info.text}</h1></button>
                    </Html>
                ))}
            </group>
            {/* <div>

            </div> */}
        </>
    );
};
