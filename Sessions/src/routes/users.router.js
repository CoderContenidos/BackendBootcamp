import { Router } from "express";

const router = Router();

router.post('/login',async(req,res)=>{
    //No necesitamos credenciales, venimos aquí a probar sesiones.
    const mockUser = {
        name:"UsuarioPrueba",
        mail:"correoUser@correo.com",
        id:0
    };
    
})

export default router;