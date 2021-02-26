<?php

    /**
     * LA BASE DE DATOS SE CONFIGURA EN EL ARCHIVO .env
     * AÑADO:
     * DATABASE_URL="mysql://root@127.0.0.1:3306/libros?serverVersion=mariadb-10.4.17"
     */

     /**
      * CONFIGURACION DE DOCTRINE /config/packages/doctrine.yaml
      * AÑADO:
        doctrine:
            dbal:
                url: '%env(resolve:DATABASE_URL)%'
                driver: 'pdo_mysql'
                # server_version: '10.4.17'
                charset: utf8mb4
                default_table_options: 
                        charset: utf8mb4
                        collate: utf8mb4_unicode_ci
                # IMPORTANT: You MUST configure your server version,
                # either here or in the DATABASE_URL env var (see .env file)
                #server_version: '13'
            orm:
                auto_generate_proxy_classes: true
                naming_strategy: doctrine.orm.naming_strategy.underscore_number_aware
                auto_mapping: true
                mappings:
                    App:
                        is_bundle: false
                        type: annotation
                        dir: '%kernel.project_dir%/src/Entity'
                        prefix: 'App\Entity'
                        alias: App       
      */

    // CREACIÓN DE LA BASE DE DATOS
    // php bin/consoledoctrine:database:create

    // CREACIÓN DE ENTIDADES, PONER EL COMANDO Y SEGUIR LOS PASOS EN LA CONSOLA
    // php bin/console make:entity

    // CREACIÓN DEL ARCHIVO MIGRATIONS (PASO PREVIO A EXPORTARTL A LA DB)
    // php bin/console make:migration

    // EXPORTAR A LA BASE DE DATOS
    // php bin/console doctrine:migrations:migrate


    // CRUD

        // CREATE
            public function insertar() {
                $objeto = new Objeto();
                $objeto->setAtributo('valor');
                // SETEAR EL RESTO DE ATRIBUTOS
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($objeto);
                try {
                    $entityManager->flush();
                } catch(Exception $e) {
                    return new Response('Error en la operación');
                }
            }

        // READ CON MÉTODOS DEL REPOSITORIO

        // findAll() trae todos los registros
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objetos  = $repository->findAll();

        // find(clave-primaria) trae un objeto segun la primary key
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objeto = $repository->find('clave-primaria');

        // findBy(parametro, valor) trae todos los objetos que cumplan un requisito (puede tener varias condiciones)
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objeto = $repository->findBy(["edad" => 18]);

        // findOneBy(parametro, valor) trae el primer registo que cumpla la condición
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objeto = $repository->findOneBy(["edad" => 18]);
            
        // AÑADIR MÉTODOS AL REPOSITORIO PARA AMPLIAR FUNCIONALIDAD
        // EJEMPLO FILTRO DE BUSQUEDA
        /**
        * @return Libro[]
        */
        public function buscarLibros($filtro) {
            $entityManager = $this->getEntityManager();
            $query = $entityManager->createQuery('SELECT lib FROM App\Entity\Libro lib
                                                WHERE lib.titulo LIKE :filtro');
            return $query->setParameter('filtro', '%'.$filtro.'%')->getResult();
        }
        // METODO DEL CONTROLADOR QUE LO UTILIZA
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

        // UPDATE
            $entityManager = $this->getDoctrine()->getManager();
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objeto = $repository->find(1);
            if ($objeto) {
                $entityManager->persist($objeto);
                try {
                    $entityManager->flush();
                } catch(Exception $e) {
                    return new Response('Error en la operación');
                }
            }

        // DELETE
            $entityManager = $this->getDoctrine()->getManager();
            $repository = $this->getDoctrine()->getRepository(Objeto::class);
            $objeto = $repository->find(1);
            $entityManager->remove($objeto);
            try {
                $entityManager->flush();
            } catch(Exception $e) {
                return new Response('Error en la operación');
            }


    /**
     *  RELACIONES ENTRE ENTIDADES: 
     *      Para añadir relaciones lo hacemos con 
     *      php bin/console make:entity
     *      ponemos el nombre de la entidad y en tipo le ponemos "relation"
     *      
     * 
     * */ 
    
?>