import { NextComponentType } from 'next'
import Image from 'next/image';

const Avatar: NextComponentType<String> = () => {
    return <div className="flex flex-col justify-center items-center">

        <Image className="h-44 w-44 hover:opacity-75" 
        height={0} width={0}
        src={"https://www.cascadeblindsni.com/wp-content/uploads/2018/11/user-circle-solid.jpg"} 
        alt="" />

    </div>
}

export default Avatar;