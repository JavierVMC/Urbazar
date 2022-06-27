-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-01-2021 a las 19:24:31
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0
CREATE SCHEMA `urbazar` ;
use urbazar;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `urbazar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador_etapas`
--

CREATE TABLE `administrador_etapas` (
  `ID` int(11) NOT NULL,
  `ID_Persona` int(11) NOT NULL,
  `ID_Etapa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador_etapas`
--

INSERT INTO `administrador_etapas` (`ID`, `ID_Persona`, `ID_Etapa`) VALUES
(1, 9, 1),
(2, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador_urbanizacion`
--

CREATE TABLE `administrador_urbanizacion` (
  `ID` int(11) NOT NULL,
  `ID_Persona` int(11) NOT NULL,
  `ID_Urbanizacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador_urbanizacion`
--

INSERT INTO `administrador_urbanizacion` (`ID`, `ID_Persona`, `ID_Urbanizacion`) VALUES
(1, 1, 1),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE `calificacion` (
  `ID` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  `Estrellas` int(11) NOT NULL,
  `comentario` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` date NOT NULL,
  `id_vendedor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `calificacion` (`ID`, `ID_Producto`, `ID_Cliente`, `Estrellas`, `comentario`, `Fecha`, `id_vendedor`) VALUES
(1, 1, 1, 4, "Buen producto", '2020-08-10' , 2),
(3, 3, 5, 3, "Buen producto", '2020-08-10' ,6),
(4, 4, 3, 5, "Buen producto", '2020-08-10' ,8),
(5, 5, 1, 4, "Buen producto", '2020-08-10' ,2);



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `ID` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`ID`, `ID_Usuario`) VALUES
(1, 1),
(2, 3),
(3, 5),
(4, 7),
(5, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `categoria` (`ID`, `nombre`) VALUES
(1, 'Ropa'),
(2, 'Tecnología'),
(3, 'Comida'),
(4, 'Hogar'),
(5, 'Maquillaje'),
(4, 'Otros');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `ID` int(11) NOT NULL,
  `ID_Persona` int(11) NOT NULL,
  `ID_Familia` int(11) NOT NULL,
  `subscripcion` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cliente`
--


INSERT INTO `cliente` (`ID`, `ID_Persona`, `ID_Familia`, `subscripcion`) VALUES
(1, 5, 1, 0),
(2, 6, 1, 0),
(3, 7, 2, 0),
(4, 8, 2, 0),
(5, 9, 3, 0),
(6, 10, 3, 0),
(7, 11, 4, 0),
(8, 12, 4, 0),
(9, 906, 4, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_carrito`
--

CREATE TABLE `detalle_carrito` (
  `ID_detalle` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `detalle_carrito`
--

INSERT INTO `detalle_carrito` (`ID_detalle`, `ID_Producto`, `Cantidad`, `id_carrito`) VALUES
(1, 3, 3, 1),
(2, 1, 2, 2),
(3, 5, 3, 3),
(4, 4, 2, 4),
(5, 1, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `ID` int(11) NOT NULL,
  `iD_Venta` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `Costo_Unitario` decimal(10,0) NOT NULL,
  `Costo_Envio` decimal(10,0) NOT NULL,
  `Costo_Total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`ID`, `iD_Venta`, `ID_Producto`, `cantidad`, `Costo_Unitario`, `Costo_Envio`, `Costo_Total`) VALUES
(1, 1, 3, 3, '200', '50', '750'),
(2, 2, 1, 10, '5', '5', '50'),
(3, 3, 5, 1, '10', '10', '20'),
(4, 4, 4, 1, '1000', '10', '1010');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etapa`
--

CREATE TABLE `etapa` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Ubicacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ID_Urbanizacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `etapa`
--

INSERT INTO `etapa` (`ID`, `nombre`, `Ubicacion`, `ID_Urbanizacion`) VALUES
(1, 'etapa 1', '3 nodos adelante', 1),
(2, 'etapa 21', '2 nodos derecha', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familia`
--

CREATE TABLE `familia` (
  `ID` int(11) NOT NULL,
  `ID_Etapa` int(11) NOT NULL,
  `Apellido` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Clave` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `familia`
--

INSERT INTO `familia` (`ID`, `ID_Etapa`, `Apellido`, `Clave`) VALUES
(1, 1, 'alvarez', '1234'),
(2, 1, 'mayorga', '1234'),
(3, 2, 'martinez', '1234'),
(4, 2, 'sanchez', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_administrador_etapa`
--

CREATE TABLE `historico_administrador_etapa` (
  `ID` int(11) NOT NULL,
  `ID-Administrador_Etapa` int(11) NOT NULL,
  `Fecha_Inicio` date NOT NULL,
  `Fecha_Final` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historico_administrador_etapa`
--

INSERT INTO `historico_administrador_etapa` (`ID`, `ID-Administrador_Etapa`, `Fecha_Inicio`, `Fecha_Final`) VALUES
(1, 1, '2020-08-10', '2021-06-30'),
(2, 2, '2020-09-15', '2022-02-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_administrador_urbanizacion`
--

CREATE TABLE `historico_administrador_urbanizacion` (
  `ID` int(11) NOT NULL,
  `ID_Administrador_Urbanizacion` int(11) NOT NULL,
  `Fecha_Inicio` date NOT NULL,
  `Fecha_final` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historico_administrador_urbanizacion`
--

INSERT INTO `historico_administrador_urbanizacion` (`ID`, `ID_Administrador_Urbanizacion`, `Fecha_Inicio`, `Fecha_final`) VALUES
(1, 1, '2020-08-10', '2021-01-28'),
(2, 2, '2020-04-22', '2021-09-21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historico_usuario`
--

CREATE TABLE `historico_usuario` (
  `ID_Usuario` int(11) NOT NULL,
  `Fecha_Inicio` date NOT NULL,
  `Fecha_Final` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historico_usuario`
--

INSERT INTO `historico_usuario` (`ID_Usuario`, `Fecha_Inicio`, `Fecha_Final`) VALUES
(2, '2020-09-15', '2021-01-28'),
(1, '2020-09-15', '2022-02-20'),
(3, '2020-11-10', '2021-08-18'),
(4, '2020-09-22', '2021-08-26'),
(6, '2020-11-17', '2021-07-15'),
(5, '2020-11-10', '2021-01-20'),
(7, '2020-11-18', '2021-01-13'),
(8, '2021-01-01', '2021-01-27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_de_pago`
--

CREATE TABLE `metodo_de_pago` (
  `ID` int NOT NULL,
  `NombreMetodo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ID_Cliente` int(11) NOT NULL,
  `cvv` int(11) NOT NULL,
  `fecha` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



--
-- Volcado de datos para la tabla `metodo_de_pago`
--


INSERT INTO `metodo_de_pago` (`ID`, `NombreMetodo`, `ID_Cliente`, `cvv`, `fecha`) VALUES
(1, 'visa', 1, 929, '2022-06'),
(2, 'mastercard',1, 932, '2023-05'),
(3, 'paypal', 5, 784, '2021-11'),
(4, 'bitcoin', 7, 569, '2020-10');



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `ID` int(11) NOT NULL,
  `identificacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `id_etapa` int(11) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Telefono` varchar(13) COLLATE utf8_spanish_ci NOT NULL,
  `Correo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Edad` int(11) NOT NULL,
  `genero` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Username` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Contrasena` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Activo` tinyint(4) NOT NULL,
  `role` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;




    
--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID`, `identificacion`,`id_etapa`, `Nombre`, `Telefono`, `Correo`, `Edad`, `genero`, `Username`, `Contrasena`, `Activo`, `role`) VALUES
(1, 9,1, 'Jose Martinez', '0904739412', 'josea@hotmail.com', 22, "Masculino", 'pepem', 'hose12345', 1, 0),
(2, 8,1, 'Carla Suarez', '0921457329', 'CarlaS@hotmail.com', 19, "Masculino",'CarlaSuarez', 'Carlita1234',1, 1),
(3, 7,2,'Maria Sanchez', '0989544843', 'mariasan@hotmail.com', 39, "Masculino",'marisan', 'marisan1234', 1, 0),
(4, 6,1, 'Ronny Apolo', '04242847', 'ronnya@hotmail.com', 24,"Masculino", 'ronap', 'ronny2425', 1, 0),
(5, 5,1,  'Juan ', '021944946', 'Juanal@hotmaiil.com', 54, "Masculino",'juanal', 'juanal2425',1, 0),
(6, 21,1,'Danilo ', '0907443971', 'Danburb@hotmail.com', 27, "Masculino",'danburb', 'danilo1234', 1, 0),
(7, 90,2, 'Veronica ', '0921476212', 'verogarci@hotmail.com', 33, "Masculino", 'verogar', 'veronica1234', 1, 1),
(8, 0902,1,  'Noe ', '0923571295', 'Noe@hotmail.com', 22, "Masculino",'noe23', 'noe23456',1, 2),
(10, 91, 1,'Olga', '0944771234', 'Olgamaria@hotmail.com', 42,"Femenino", 'olgamar', 'olga123456', 1, 1),
(9, 021, 2,'Dayana ', '0988337758', 'Dayna22@hotmail.com', 22, "Masculino", 'dayavel','dayana223344', 1, 0),
(11, 928, 1,'Daniel', '098957489', 'daro@hotmail.com', 33, "Masculino",'daro', '1234', 1, 2),
(12, 23, 2, 'viviana', '0912314112', 'vivi@hotmail.com', 22, "Femenino",'viviana', '12323', 1, 2),
(906, "0952242667", 1, 'Pedro mayorga', '0952242667', 'pedrito@gmail.com', 22, "Masculino",'pepe', '$2a$10$spFVpvU..pU41zpJxRJnIum93qDM9kjhoIKctFMZsFTsRtJuruKk2',1, 1),
(907, "0952242667", 1, 'Diana Alvarado', '0972242667', 'pedrito@gmail.com', 22, "Masculino",'adminetapa', '$2a$10$spFVpvU..pU41zpJxRJnIum93qDM9kjhoIKctFMZsFTsRtJuruKk2',1, 2),
(908, "0952242667", 1, 'Carlos Gutierrez', '0852242667', 'pedrito@gmail.com', 22, "Masculino",'adminconjunto', '$2a$10$spFVpvU..pU41zpJxRJnIum93qDM9kjhoIKctFMZsFTsRtJuruKk2',1, 3);



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `ID` int(11) NOT NULL,
  `ID_vendedor` int(11) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Precio` decimal(10,0) NOT NULL,
  `Activo` tinyint(4) NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Stock` int(11) NOT NULL,
  `Promedio_Puntuacion` int(11) NOT NULL,
  `Pedido_Anticipado` tinyint(4) NOT NULL,
  `source` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `ID_Categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `producto`
--


INSERT INTO `producto` (`ID`, `ID_vendedor`,`ID_Categoria`, `Nombre` ,`Precio`, `Activo`, `Descripcion`, `Stock`, `Promedio_Puntuacion`, `Pedido_Anticipado`, `source`) VALUES
(1, 2,1, 'zapatos', '23', 1, 'zapatos de vestir ', 20, 4, 1, 'https://vasari.vteximg.com.br/arquivos/ids/193038-500-500/VZC171644-NG-38.jpg?v=637302896491870000'),
(2, 2,1, 'camisa ', '20', 1, 'camisa de vestir', 7, 4, 1, 'https://cdn.shopify.com/s/files/1/0557/6608/9903/products/Oficial2022Frente.jpg?v=1643676574'),
(3, 4,2, 'computadora ', '500', 1, 'computadora lenovo', 100, 5, 1, 'https://www.idcmayoristas.com/wp-content/uploads/2020/04/002589.jpg'),
(4, 6,2, 'iphone', '5', 1, 'celular phone 10 ', 20, 5, 1, 'https://images-na.ssl-images-amazon.com/images/I/61ceSVoz1nL._AC_SX385_.jpg'),
(5, 8,4, 'alcohol', '2', 1, 'alcohol antiseptico', 200, 5, 1, 'https://d2o812a6k13pkp.cloudfront.net/Productos/40383431_01.jpg');

-- --------------------------
use urbazar; 

CREATE TABLE `sources` (
  `ID` int(11) NOT NULL,
  `ID_Producto` int(11) NOT NULL,
  `Source` varchar(300) COLLATE utf8_spanish_ci NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
  
  INSERT INTO `sources` (`ID`, `ID_Producto`,`Source`) VALUES
  (1,1, 'https://vasari.vteximg.com.br/arquivos/ids/193038-500-500/VZC171644-NG-38.jpg?v=637302896491870000'),
  (2,1, 'https://http2.mlstatic.com/D_NQ_NP_697199-MEC44983042563_022021-W.jpg'), 
  (3, 1, 'https://i.pinimg.com/originals/19/f5/2c/19f52c5e499016adbffe02b729b5309e.jpg'),
  (4, 2, 'https://media.marathon.store/products/h2b/hc5/h00/9157682167838.jpg'),
  (5, 2, 'https://todosobrecamisetas.com/wp-content/uploads/camiseta-barcelona-sc-200-anios-guayaquil-2.jpg'),
  (6, 2, 'https://media.marathon.store/products/h2b/hc5/h00/9157682167838.jpg'),
  (7, 3, 'https://www.idcmayoristas.com/wp-content/uploads/2020/04/002589.jpg'),
  (8, 3, 'https://images-na.ssl-images-amazon.com/images/I/61gn5whRfNL._SL1000_.jpg'),
  (9, 3, 'https://1700digital.com/wp-content/uploads/lenovo-s340gamer2.jpg'),
  (10, 4, 'https://images-na.ssl-images-amazon.com/images/I/61ceSVoz1nL._AC_SX385_.jpg'),
  (11, 4, 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/09/hipertextual-iphone-11-2019772090.jpeg?fit=1200%2C788&ssl=1'),
  (12, 4, 'https://www.muycomputer.com/wp-content/uploads/2020/10/iPhone-12.jpg'),
  (13, 5, 'https://gontec.com.ec/wp-content/uploads/2020/05/alcohol_anti.png'),
  (14, 5, 'https://http2.mlstatic.com/D_NQ_NP_608422-MEC43308746534_082020-O.jpg');
  
  
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `urbanizacion`
--

CREATE TABLE `urbanizacion` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Ubicacion` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `urbanizacion`
--

INSERT INTO `urbanizacion` (`ID`, `nombre`, `Ubicacion`) VALUES
(1, 'ceibos norte', 'ceibos norte'),
(2, 'alcances', 'samanes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `ID_Usuario` int(11) NOT NULL,  
  `Valoracion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`ID_Usuario`,`Valoracion`) VALUES
(2, 5),
(4, 5),
(6, 5),
(8, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `ID` int(11) NOT NULL,
  `ID_Usuario` int(11) NOT NULL,
  `ID_vendedor` int(11) NOT NULL,
  `Precio_Total` decimal(10,0) NOT NULL,
  `Fecha_Compra` date NOT NULL,
  `ID_Metodo_Pago` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`ID`, `ID_Usuario`, `ID_vendedor`, `Precio_Total`, `Fecha_Compra`, `ID_Metodo_Pago`) VALUES
(1, 1, 4, '100', '2021-01-05', 1),
(2, 3, 2, '500', '2021-01-11', 2),
(3, 5, 8, '200', '2021-01-18', 3),
(4, 7, 6, '100', '2021-01-21', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador_etapas`
--
ALTER TABLE `administrador_etapas`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID_Etapa_2` (`ID_Etapa`),
  ADD KEY `ID_Persona` (`ID_Persona`),
  ADD KEY `ID_Etapa` (`ID_Etapa`);

--
-- Indices de la tabla `administrador_urbanizacion`
--
ALTER TABLE `administrador_urbanizacion`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID_Urbanizacion_2` (`ID_Urbanizacion`),
  ADD KEY `ID_Persona` (`ID_Persona`),
  ADD KEY `ID_Urbanizacion` (`ID_Urbanizacion`);

--
-- Indices de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `ID_Cliente` (`ID_Cliente`),
  ADD KEY `id_vendedor` (`id_vendedor`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Producto` (`ID_Usuario`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Persona` (`ID_Persona`),
  ADD KEY `ID_Familia` (`ID_Familia`);

--
-- Indices de la tabla `detalle_carrito`
--
ALTER TABLE `detalle_carrito`
  ADD PRIMARY KEY (`ID_detalle`),
  ADD KEY `ID_Producto` (`ID_Producto`),
  ADD KEY `iD_Usuario` (`ID_detalle`),
  ADD KEY `id_carrito` (`id_carrito`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `iD_Venta` (`iD_Venta`),
  ADD KEY `ID_Producto` (`ID_Producto`);

--
-- Indices de la tabla `etapa`
--
ALTER TABLE `etapa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Urbanizacion` (`ID_Urbanizacion`);

--
-- Indices de la tabla `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Clave` (`Clave`),
  ADD KEY `Clave_2` (`Clave`),
  ADD KEY `ID_Etapa` (`ID_Etapa`);

--
-- Indices de la tabla `historico_administrador_etapa`
--
ALTER TABLE `historico_administrador_etapa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID-Administrador_Etapa` (`ID-Administrador_Etapa`);

--
-- Indices de la tabla `historico_administrador_urbanizacion`
--
ALTER TABLE `historico_administrador_urbanizacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Administrador_Urbanizacion` (`ID_Administrador_Urbanizacion`);

--
-- Indices de la tabla `historico_usuario`
--
ALTER TABLE `historico_usuario`
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indices de la tabla `metodo_de_pago`
--
ALTER TABLE `metodo_de_pago`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Cliente` (`ID_Cliente`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_vendedor` (`ID_vendedor`);

--
-- Indices de la tabla `urbanizacion`
--
ALTER TABLE `urbanizacion`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`ID_Usuario`),
  ADD KEY `ID_Usuario` (`ID_Usuario`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Usuario` (`ID_Usuario`),
  ADD KEY `ID_vendedor` (`ID_vendedor`),
  ADD KEY `ID_Metodo_Pago` (`ID_Metodo_Pago`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador_etapas`
--
ALTER TABLE `administrador_etapas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `administrador_urbanizacion`
--
ALTER TABLE `administrador_urbanizacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `etapa`
--
ALTER TABLE `etapa`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `familia`
--
ALTER TABLE `familia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `historico_administrador_etapa`
--
ALTER TABLE `historico_administrador_etapa`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `historico_administrador_urbanizacion`
--
ALTER TABLE `historico_administrador_urbanizacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `metodo_de_pago`
--
ALTER TABLE `metodo_de_pago`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `urbanizacion`
--
ALTER TABLE `urbanizacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador_etapas`
--
ALTER TABLE `administrador_etapas`
  ADD CONSTRAINT `administrador_etapas_ibfk_1` FOREIGN KEY (`ID_Persona`) REFERENCES `persona` (`ID`),
  ADD CONSTRAINT `administrador_etapas_ibfk_2` FOREIGN KEY (`ID_Etapa`) REFERENCES `etapa` (`ID`);

--
-- Filtros para la tabla `administrador_urbanizacion`
--
ALTER TABLE `administrador_urbanizacion`
  ADD CONSTRAINT `administrador_urbanizacion_ibfk_1` FOREIGN KEY (`ID_Persona`) REFERENCES `persona` (`ID`),
  ADD CONSTRAINT `administrador_urbanizacion_ibfk_2` FOREIGN KEY (`ID_Urbanizacion`) REFERENCES `urbanizacion` (`ID`);

--
-- Filtros para la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD CONSTRAINT `calificacion_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID`),
  ADD CONSTRAINT `calificacion_ibfk_2` FOREIGN KEY (`ID`) REFERENCES `producto` (`ID`),
  ADD CONSTRAINT `calificacion_ibfk_3` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`ID_Usuario`);

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `cliente` (`ID`);

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`ID_Persona`) REFERENCES `persona` (`ID`),
  ADD CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`ID_Familia`) REFERENCES `familia` (`ID`);

--
-- Filtros para la tabla `detalle_carrito`
--
ALTER TABLE `detalle_carrito`
  ADD CONSTRAINT `detalle_carrito_ibfk_1` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID`),
  ADD CONSTRAINT `detalle_carrito_ibfk_2` FOREIGN KEY (`id_carrito`) REFERENCES `carrito` (`ID`);

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `detalle_venta_ibfk_1` FOREIGN KEY (`iD_Venta`) REFERENCES `venta` (`ID`),
  ADD CONSTRAINT `detalle_venta_ibfk_2` FOREIGN KEY (`ID_Producto`) REFERENCES `producto` (`ID`);

--
-- Filtros para la tabla `etapa`
--
ALTER TABLE `etapa`
  ADD CONSTRAINT `etapa_ibfk_2` FOREIGN KEY (`ID_Urbanizacion`) REFERENCES `urbanizacion` (`ID`);

--
-- Filtros para la tabla `familia`
--
ALTER TABLE `familia`
  ADD CONSTRAINT `familia_ibfk_1` FOREIGN KEY (`ID_Etapa`) REFERENCES `etapa` (`ID`);

--
-- Filtros para la tabla `historico_administrador_etapa`
--
ALTER TABLE `historico_administrador_etapa`
  ADD CONSTRAINT `historico_administrador_etapa_ibfk_1` FOREIGN KEY (`ID-Administrador_Etapa`) REFERENCES `administrador_etapas` (`ID`);

--
-- Filtros para la tabla `historico_administrador_urbanizacion`
--
ALTER TABLE `historico_administrador_urbanizacion`
  ADD CONSTRAINT `historico_administrador_urbanizacion_ibfk_1` FOREIGN KEY (`ID_Administrador_Urbanizacion`) REFERENCES `administrador_urbanizacion` (`ID`);

--
-- Filtros para la tabla `historico_usuario`
--
ALTER TABLE `historico_usuario`
  ADD CONSTRAINT `historico_usuario_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `cliente` (`ID`);

--
-- Filtros para la tabla `metodo_de_pago`
--
ALTER TABLE `metodo_de_pago`
  ADD CONSTRAINT `metodo_de_pago_ibfk_1` FOREIGN KEY (`ID_Cliente`) REFERENCES `cliente` (`ID`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`ID_vendedor`) REFERENCES `vendedor` (`ID_Usuario`);

--
-- Filtros para la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD CONSTRAINT `vendedor_ibfk_1` FOREIGN KEY (`ID_Usuario`) REFERENCES `cliente` (`ID`);

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`ID_Metodo_Pago`) REFERENCES `metodo_de_pago` (`ID`),
  ADD CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`ID_Usuario`) REFERENCES `cliente` (`ID`),
  ADD CONSTRAINT `venta_ibfk_3` FOREIGN KEY (`ID_vendedor`) REFERENCES `vendedor` (`ID_Usuario`);

ALTER TABLE `persona`
  ADD vendedorTipo INTEGER;
ALTER TABLE `detalle_carrito` CHANGE `ID_detalle` `ID_detalle` INT( 11 ) NOT NULL AUTO_INCREMENT;
ALTER TABLE `sources` CHANGE `ID` `ID` INT( 11 ) PRIMARY KEY NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
