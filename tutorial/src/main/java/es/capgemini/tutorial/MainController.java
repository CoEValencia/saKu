package es.capgemini.tutorial;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.capgemini.tutorial.common.BusinessOperations;
import es.capgemini.tutorial.common.EmailSender;
import es.capgemini.tutorial.common.Utils;
import es.capgemini.tutorial.permisos.model.Permisos;
import es.capgemini.tutorial.permisos.service.PermisosServiceDto;
import es.capgemini.tutorial.usuario.model.Usuario;
import es.capgemini.tutorial.usuario.service.UsuarioServiceDto;

@Controller
public class MainController {

    @Autowired
    private BusinessOperations businessProxy;

    /**
     * Funcion para registrar nuevos usuarios.
     * */
    @RequestMapping(value = "/public/ADD_NEW_USER.wbo", method = RequestMethod.POST)
    @ResponseBody
    public String main(@RequestParam("userName") String userName, @RequestParam("password") String pass, @RequestParam("email") String email)
            throws NoSuchAlgorithmException, UnsupportedEncodingException {
        UsuarioServiceDto dto = new UsuarioServiceDto();
        Usuario usuario = null;

        usuario = businessProxy.usuario.findByName(userName);
        if (usuario == null) {

            dto.setName(userName);
            dto.setUserName(userName);
            dto.setEmail(email);

            Usuario aux = businessProxy.usuario.update(dto);
            dto.setPassword(Utils.encryptPassword(pass + "{" + aux.getId() + "}"));
            dto.setId(aux.getId());
            businessProxy.usuario.update(dto);

            EmailSender sender = new EmailSender(email);
            sender.send("Bienvenido a Chirr", MENSAJE + URL + dto.getId());

            return "Registro realizado, revise su email.";
        }
        return "Usuario o email ya elegidos";
    }

    //Contenido del EMAIL.
    private static String MENSAJE = "Bienvenido a chir, solo un paso más valide su cuenta en el siguiente enlace:";
    private static String URL = "http://localhost:8080/tutorial/?user_confirm=true&&id=";

    /**
     * Funcion para comprobar los permisos de usuarios confirmados o sin confirmar.
     * Los usuarios sin permisos no pueden acceder a los services.
     * */
    @RequestMapping(value = "/public/CHECK_PERMISOS_USER.wbo", method = RequestMethod.POST)
    @ResponseBody
    public List<Permisos> permisos(@RequestParam("id") Long id) {
        return businessProxy.permisos.findByPermisosId(id);
    }

    public static String ROLE_USER = "ROLE_USER";

    /**
     * Funcion para validar usuarios.
     * */
    @RequestMapping(value = "/public/VALIDATE_USER.wbo", method = RequestMethod.POST)
    @ResponseBody
    public String validate(@RequestParam("id") Long id) {

        PermisosServiceDto dto = new PermisosServiceDto();
        dto.setAuthority(ROLE_USER);
        dto.setUserId(id);
        businessProxy.permisos.update(dto);
        return "succes";
    }

}
