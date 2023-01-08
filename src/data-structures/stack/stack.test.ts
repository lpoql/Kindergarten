import StackStruct from "./stack";

const stack = new StackStruct()
describe('Stack Options', () => {
    it('to add items to the stack', () => {
        expect(stack.push(9)).toEqual([9])
        expect(stack.push(8)).toEqual([9,8])
    })
    it('should return the stack after remove the last of element', () => {
        expect(stack.pop()).toEqual([9])
        expect(stack.pop()).toEqual([])
    });
    it('should return the stack length', function () {
        stack.push(9)
        stack.push(8)
        stack.push(7)
        expect(stack.size()).toBe(3)
    });
})