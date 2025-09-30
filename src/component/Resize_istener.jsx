import { useEffect } from "react";

export default function ResizeListener() {
    useEffect(() => {
        
        const handleResize = () => {
            console.log('윈도우창 (Width, 길이)크기 변경: ', innerWidth, 'px');
        };
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return(
        <p>콘솔에서 창 크기 확인</p>
    )
}