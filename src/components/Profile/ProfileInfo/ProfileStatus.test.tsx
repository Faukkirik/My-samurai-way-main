import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("Button component",()=> {
    test("It shows the expected text when  clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"}/>);
        const instance = component.getInstance()
        expect(instance?.props.status).toBe("SUBSCRIBE TO BASIC")
    })
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"}/>);
        const root = component.root
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow()
    })
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"}/>);
        const root = component.root
        let span = root.findByType("span")
        expect(span.children[0]).toBe("SUBSCRIBE TO BASIC")
    })
    test("input should be displayed edit mode instead of span", () => {
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"}/>);
        const root = component.root
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("SUBSCRIBE TO BASIC")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"SUBSCRIBE TO BASIC"} updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})