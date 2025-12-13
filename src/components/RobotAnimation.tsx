import Lottie from "lottie-react";
import robot from '../assets/robot.json'

export function RobotAnimation() {
    return (
            <div className="animation">
                <Lottie 
                    animationData={robot}
                    loop={true}
                    autoPlay={true}
                />
            </div>
    )
}


