<?php
    class Rutas {
        /**
         * PARA UTILIZAR LAS RUTAS AMIGABLES HAY QUE CONFIGURAR
         * 
         * composer config extra.symfony.allow-contrib true
         * 
         * composer req symfony/apache-pack
         */

 // DEFINICIÓN DE RUTAS - COLOCAMOS LO SIGUIENTE ARRIBA DE UN CONTROLADOR

 // IMPORTACIÓN: 
    use Symfony\Component\Routing\Annotation\Route;

    // RUTA BASICA
    /**
    * @Route("/ruta", name="nombre-ruta")
    */

    // RUTA CON VARIABLE

    /**
    * @Route("/ruta/{variable}", name="ruta-variable")
    */
    public function funcion($variable) {
        return "hola soy tu $variable";
    }

    // RUTA CON VARIABLE Y REQUISITO (POR SI HAY DOS IGUALES!!)
    /**
    * @Route("/ruta/{variable}", name="ruta-requisito", requirements={"variable"="\d+"})
    */
    // PODEMOS DAR VALOR POR DEFECTO 
    public function funcionVariable($variable = 1){}     

    // PLANTILLAS TWIG VER EJEMPLO EN PROYECTO LIBROS
    
    /**
     * En base.html.twig (plantilla base) es donde tengo que importar el css y todo lo demás
     */


    //FILTROS EN LAS PLANTILLAS AL UTILIZAR {{ variable.atributo | upper }} TIPO PIPE DE ANGULAR
}


 ?>