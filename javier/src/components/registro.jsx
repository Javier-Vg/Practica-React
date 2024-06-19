
export function registro() {
    return ( 
        <div>
            <h2>Nombre de usuario:</h2>
            <input id="nomUsuario" type="text" />
            <br/>
            <br/>
            <h2>Ingrese su nuevo correo:</h2>
            <input id="correoRegister" type="text" />
            <br/>
            <br/>
            <h2>Ingrese la contraseña para su nuevo correo:</h2>
            <input id="contraRegister" type="text" />
            <br/>
            <br/>
            <button id="btnRegisterEnvio">Registrarse</button>
        </div>
    )
}