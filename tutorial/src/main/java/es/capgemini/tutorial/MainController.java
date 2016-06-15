package es.capgemini.tutorial;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.capgemini.tutorial.common.BusinessOperations;
import es.capgemini.tutorial.common.Utils;
import es.capgemini.tutorial.usuario.model.Usuario;
import es.capgemini.tutorial.usuario.service.UsuarioServiceDto;

@Controller
public class MainController {

    @Autowired
    private BusinessOperations businessProxy;

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
            return "Registro realizado, revise su email.";
        }
        return "Usuario o email ya elegidos";
    }

}
