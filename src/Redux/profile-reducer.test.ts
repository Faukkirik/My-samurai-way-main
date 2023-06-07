import {AddPostAC, DeletePostAC, PostPropsType, profileReducer} from "./profile-reducer";


let state = {
    post: [
        {id: "1", message: "Hi, how are you?", likeCount: 10},
        {id: "2", message: "It's my first post", likeCount: 12},
        {id: "3", message: "omg", likeCount: 27},
    ] as PostPropsType[],
    profile: null,
    status: ''
}
test('new post should be added in beginning of the array ',()=>{
    // 1. test data
    let action = AddPostAC("bye world")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.post.length).toBe(4)
    expect(newState.post[0].message).toBe("bye world")
    expect(newState.post[0].likeCount).toBe(0)
})
test('after deleting length of messages  should be decrement',()=>{
    // 1. test data
    let action = DeletePostAC("1")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.post.length).toBe(2)
    expect(newState.post[0].id).not.toBe("1")

})