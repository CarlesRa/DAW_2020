<?php
    /**
     * ACCESO A DATOS DEL FORMULARIO
     *  ->request accede a $_POST
     *  ->query accede a $_GET
     *  ->server accede a $_SERVER
     * 
     * IMPORTAR Request: 
     *  use Symfony\Component\HttpFoundation\Request;
     */
    
     // FUNCION PARA BUSCAR Y COMO RECOJER LOS DATOS DE UN FORMULARIO
     class Formulario {
         /**
        * @Route("/buscar", name="buscar")
        */
        public function buscar(Request $request) {
            $libros = null;
            $formulario = $this->createFormBuilder()
                          ->add('filtro', TextType::class)
                          ->add('save', SubmitType::class, array('label' => 'Buscar'))
                          ->getForm();
            $formulario->handleRequest($request);
            if ($formulario->isSubmitted() && $formulario->isValid()) {
                /**
                * @var (LibroRepository)
                */
                $repository = $this->getDoctrine()->getRepository(Libro::class);
                $filtro = $formulario->getData()['filtro'];
                $libros = $repository->buscarLibros($filtro);
            }
            return $this->render('buscar_libros.html.twig', 
                   array('formulario' => $formulario->createView(), 'libros' => $libros));
        }

        // CREACIÓN DE FORMULARIO EN EL CONTROLADOR

        public function nuevo() {
            $objeto = new Objeto();
            $formulario = $this->createFormBuilder($objeto)
                          ->add('nombre', TextType::class)
                          ->add('apellido', TextType::class)
                          ->add('save', SubmitType::class)
                          ->getForm();
            $formulario->handleRequest($request);
            if ($formulario->isSubmitted() && $formulario->isValid()) {
                // EL FORMULARIO ES CORRECTO Y SE HA PULSADO ENVIAR
                // AQUÍ REDIRIJO A LA PÁGINA CORRESPONDIENTE!!
            }

        }
     }

     //TODO seguir con los formularios
     
        
?>