import React from "react";
import "./testComponent.scss";

export interface TestComponentProps {
    name: string
}
export const TestComponent: React.FC<TestComponentProps> = ({name}) => {
    return <div className={"test-component-container"}>
        <p>Hi ! Welcome,</p>
        <p>{name}</p>
    </div>
}