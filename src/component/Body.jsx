import { useEffect } from "react";

export default function Body(){
    useEffect(() => {
        console.log('컴포넌트가 처음 마운트 됨');

        return () => {
            console.log('컴포넌트가 언마운트 될때 실행')
        };
    }, []);

    return(
        <>
            <h1>Body</h1>
        </>
    );
}