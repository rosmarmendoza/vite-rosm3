// ANCHOR ---> Condicional ternario y operador AND (&&)
let rolUsuario = "comprador"

if(rolUsuario ==="vendedor"){
    console.log("Tu stock es de 10 productos")
}

//let mensaje = rolUsuario === "vendedor" ? "Tu stock es de 10 productos":"Lo siento no puedo brindarte esta informacion"

console.log(rolUsuario === "vendedor" && "Tu stock es de 10 productos")
