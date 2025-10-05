// Syntax/type bug: incorrect interface property name causes type mismatch at runtime
interface User { id: number; name: string; emailAddress: string; }
function getName(u: User) {
    return u.email; // property 'email' doesn't exist -> undefined at runtime
}
console.log(getName({id:1, name:'A', emailAddress:'a@x.com'}));
