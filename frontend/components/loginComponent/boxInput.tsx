import React, {ChangeEvent} from 'react';


interface RegisterProps {
    title: string;
    setInput:React.Dispatch<React.SetStateAction<string>>;
}

function BoxInput({ title ,setInput}: RegisterProps) {


    return (
        <section className="w-full flex flex-col gap-2">
            <p className="lg:text-desktext16 text-monile12 font-semibold text-gray-600">{title}</p>
            <input type="text" className="lg:w-full lg:text-[0.7349vw] text-mobtext10 py-[1.4644vh] px-2 outline-0rounded-xl"
                   onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}  style={{border:"1px solid rgba(200,200,200,.4)"}} placeholder="نام خود را به فارسی وارد کنید.."/>
        </section>
    );
}

export default BoxInput;