-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 31 mars 2022 à 07:34
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tkt-bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `animal`
--

DROP TABLE IF EXISTS `animal`;
CREATE TABLE IF NOT EXISTS `animal` (
  `id` int(11) DEFAULT NULL,
  `nom` text COLLATE utf8_bin NOT NULL,
  `idEnclos` int(11) NOT NULL,
  `idEspece` int(11) NOT NULL,
  `idSante` int(11) NOT NULL,
  UNIQUE KEY `idEnclos` (`idEnclos`,`idEspece`,`idSante`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`id`, `nom`, `idEnclos`, `idEspece`, `idSante`) VALUES
(1, 'test', 1, 1, 1),
(2, 'raimie', 1, 3, 1),
(3, 'benoit', 2, 2, 3),
(NULL, 'Florian', 0, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `avertissements`
--

DROP TABLE IF EXISTS `avertissements`;
CREATE TABLE IF NOT EXISTS `avertissements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `idNiveau` int(11) NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `avertissements`
--

INSERT INTO `avertissements` (`id`, `libelle`, `idNiveau`, `description`) VALUES
(8, 'sdff', 3, 'dsfsdfs'),
(3, 'testgrgdrrrrrrrrrrrrrrrrrrrrrrr', 2, 'testetsetstetst'),
(4, 'e', 1, 'a'),
(5, 'testt', 2, 'testetsetstetst'),
(6, 'e', 1, 'z'),
(7, 'cxdr', 4, 'rgfetg');

-- --------------------------------------------------------

--
-- Structure de la table `continent`
--

DROP TABLE IF EXISTS `continent`;
CREATE TABLE IF NOT EXISTS `continent` (
  `id` int(11) NOT NULL,
  `libelle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `continent`
--

INSERT INTO `continent` (`id`, `libelle`) VALUES
(1, 'Asie'),
(2, 'Afrique'),
(0, 'Captivité'),
(0, 'Amérique du sud');

-- --------------------------------------------------------

--
-- Structure de la table `enclos`
--

DROP TABLE IF EXISTS `enclos`;
CREATE TABLE IF NOT EXISTS `enclos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `enclos`
--

INSERT INTO `enclos` (`id`, `libelle`) VALUES
(1, 'test'),
(2, '35 metre carré jungle'),
(3, '150 mètre carré desert'),
(4, 'Enclos des tigres');

-- --------------------------------------------------------

--
-- Structure de la table `espece`
--

DROP TABLE IF EXISTS `espece`;
CREATE TABLE IF NOT EXISTS `espece` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `taille` int(11) NOT NULL,
  `poidsMin` int(11) NOT NULL,
  `poidsMax` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `idContinent` int(11) NOT NULL,
  `gestation` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `localisationImage` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `espece`
--

INSERT INTO `espece` (`id`, `libelle`, `image`, `description`, `taille`, `poidsMin`, `poidsMax`, `idType`, `idContinent`, `gestation`, `localisationImage`) VALUES
(1, 'albator', 'https://via.placeholder.com/300', 'il aime vole', 30, 50, 70, 1, 0, '', ''),
(2, 'serpent des sable', 'https://tinyurl.com/4up6a4tu', 'La vipère des sables, ou vipère du désert (nom scientifique : Cerastes vipera) est une espèce de serpent venimeux de la famille des vipères, qui vit, comme son nom l\'indique, dans les déserts. C\'est une proche cousine de la vipère à cornes, qui vit dans les mêmes milieux.', 10, 2, 5, 2, 0, '', ''),
(3, 'Ara bleu', 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Ara_ararauna_%28Linnaeus_1758%29.jpg', 'L\'Ara bleu, également appelé Ara bleu et jaune ou Ara ararauna, est un grand perroquet du genre Ara facilement reconnaissable aux couleurs de son plumage. Cet oiseau est protégé par la Convention de Washington et l\'arrêté ministériel du 15 mai 1986 listant les espèces d\'oiseaux protégées de Guyane.', 1, 0, 2, 3, 0, '', ''),
(4, 'Tigre blanc', 'https://www.cerza.com/wp-content/uploads/2021/03/Tigre-blanc-1-1.jpg', 'Félin solitaire, le Tigre du Bengale s’active aux mêmes heures que les proies dont il se nourrit.\r\n\r\nIl préfère d’ailleurs la chasse en milieu dense, ce qui lui permet de mieux se camoufler.\r\n\r\nTrès bon nageur, le Tigre du Bengale passe de longs moments dans l’eau.\r\n\r\nCertains Tigres du Bengale naissent avec une mutation génétique dont la conséquence est la couleur blanche de leur pelage.\r\n\r\nA cause de cette couleur très voyante, ces tigres ne survivent pas dans la nature.\r\n\r\nAu même titre que les autres sous-espèces de tigres, le Tigre du Bengale est proche de l‘extinction.\r\n\r\nSa chasse à des fins commerciales et la disparition de son habitat le condamnent à disparaître des zones sauvages non protégées.', 90, 150, 250, 0, 1, '', ''),
(5, 'Tigre blanc', 'https://www.cerza.com/wp-content/uploads/2021/03/Tigre-blanc-1-1.jpg', 'Félin solitaire, le Tigre du Bengale s’active aux mêmes heures que les proies dont il se nourrit.\r\n\r\nIl préfère d’ailleurs la chasse en milieu dense, ce qui lui permet de mieux se camoufler.\r\n\r\nTrès bon nageur, le Tigre du Bengale passe de longs moments dans l’eau.\r\n\r\nCertains Tigres du Bengale naissent avec une mutation génétique dont la conséquence est la couleur blanche de leur pelage.\r\n\r\nA cause de cette couleur très voyante, ces tigres ne survivent pas dans la nature.\r\n\r\nAu même titre que les autres sous-espèces de tigres, le Tigre du Bengale est proche de l‘extinction.\r\n\r\nSa chasse à des fins commerciales et la disparition de son habitat le condamnent à disparaître des zones sauvages non protégées.', 90, 150, 250, 0, 1, '', ''),
(6, 'Ours polaire', 'https://ici.exploratv.ca/upload/site/tv-show/picture/1204/5dc06d557e730.1646671077.jpg', 'Bien que « polaire », l’ours blanc s’aventure régulièrement sur la toundra l’été où les températures avoisinent les 25°C !\r\n\r\nIl y trouve un biotope différent de celui des glaciers : mousses, lichens, bruyères, rochers et quelques arbustes.\r\n\r\nLa fonte de la banquise diminue le territoire de chasse des ours. Les femelles n’accumulent alors pas assez de réserves pour vivre dans leur tanière ne permettant pas de nourrir correctement les jeunes. Aujourd’hui, 60% des petits meurent avant l’âge d’un an alors qu’ils étaient 40% dans les années 90.\r\n\r\nDes petits gestes simples, comme éteindre les appareils en veille ou composter ses déchets, limitent l’émission de gaz à effet de serre. Cela permet de protéger notre environnement et celui de l’ours polaire.', 120, 150, 250, 2, 1, '', ''),
(7, 'Tigre blanc', 'tigre_blanc', 'Félin solitaire, le Tigre du Bengale s’active aux mêmes heures que les proies dont il se nourrit.\r\n\r\nIl préfère d’ailleurs la chasse en milieu dense, ce qui lui permet de mieux se camoufler.\r\n\r\nTrès bon nageur, le Tigre du Bengale passe de longs moments dans l’eau.\r\n\r\nCertains Tigres du Bengale naissent avec une mutation génétique dont la conséquence est la couleur blanche de leur pelage.\r\n\r\nA cause de cette couleur très voyante, ces tigres ne survivent pas dans la nature.\r\n\r\nAu même titre que les autres sous-espèces de tigres, le Tigre du Bengale est proche de l‘extinction.\r\n\r\nSa chasse à des fins commerciales et la disparition de son habitat le condamnent à disparaître des zones sauvages non protégées.', 90, 150, 250, 1, 0, '3 mois', 'https://www.cerza.com/wp-content/uploads/2021/03/carte-tigre-blanc.png'),
(8, 'Alpaga', 'alpaga', 'L’Alpaga est un cousin du Lama, célèbre Camélidé sud-américain. Il porte cependant une toison plus fournie que son illustre parent, toison qui permet à cet animal de vivre à des altitudes avoisinant les 4800 m. Les hommes élèvent l’Alpaga principalement pour sa laine de très bonne qualité.\r\n\r\nLe Lama, l’Alpaga, la Vigogne et le Guanaco font tous partie de la famille des Camélidés. Le Lama et l’Alpaga sont domestiques.\r\n\r\nL’Alpaga est considéré comme un animal domestique et n’est donc pas menacé.', 100, 55, 65, 2, 1, '11 à 12 mois', 'https://www.cerza.com/wp-content/uploads/2021/03/carte-alpaga.png'),
(9, 'Ara ararauna', 'ara_ararauna', 'Comme les autres espèces d’aras, l’Ara bleu et jaune est un oiseau bruyant et assez facile à repérer grâce à ses plumes vivement colorées.\r\n\r\nCet oiseau vit principalement dans les Varzéas, des forêts périodiquement envahies par les eaux.\r\n\r\nSur le continent Sud-Américain, son importante aire de répartition le rend moins vulnérable que d’autres espèces d’Aras. Toutefois, l’Ara bleu et jaune à déjà disparu de certaines régions comme le sud-est du Brésil ainsi que l’île de Tobago.\r\n\r\nMalgré ses mœurs grégaires, l’Ara bleu et jaune est fidèle en amour. D’ailleurs, dans les groupes, les couples se distinguent bien car les deux amoureux volent aile contre aile.', 110, 2, 2, 4, 1, '25 à 28 jours', 'https://www.cerza.com/wp-content/uploads/2021/03/carte-ararauna.png');

-- --------------------------------------------------------

--
-- Structure de la table `etatmission`
--

DROP TABLE IF EXISTS `etatmission`;
CREATE TABLE IF NOT EXISTS `etatmission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `etatmission`
--

INSERT INTO `etatmission` (`id`, `libelle`) VALUES
(1, 'humain'),
(2, 'dangereux');

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

DROP TABLE IF EXISTS `mission`;
CREATE TABLE IF NOT EXISTS `mission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `complete` tinyint(1) NOT NULL,
  `commentaire` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `idEnclos` int(11) DEFAULT NULL,
  `idAnimal` int(11) DEFAULT NULL,
  `idUser` int(11) NOT NULL,
  `idEtat` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`id`, `libelle`, `description`, `complete`, `commentaire`, `idEnclos`, `idAnimal`, `idUser`, `idEtat`, `date`) VALUES
(1, 'test', 'les ak47 sont sortie du zoo', 1, 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 1, 1, 2, 1, '2022-03-01'),
(2, 'oiseau pas la ', 'oiseau pas dans le bonne enclos', 0, 'l\'oiseau peut mourir #ripbozo', 2, 3, 3, 2, '2022-03-01'),
(3, 'les lion sont de sortie', 'unecarte google de 50E est cacher dans cette video', 1, 'code forl an', 1, 2, 2, 1, '2022-03-02'),
(4, 'finalllllllll', 'fdojbvijsbfvklsndovinzoijfkosdnvvokjokjsdf', 1, ',bkjsdbgjkzegh', 2, 3, 2, 2, '2022-01-18');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

DROP TABLE IF EXISTS `niveau`;
CREATE TABLE IF NOT EXISTS `niveau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`id`, `libelle`) VALUES
(1, 'normal'),
(2, 'moins normale'),
(3, 'chiant'),
(4, 'tres chiant');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id`, `libelle`) VALUES
(1, 'test');

-- --------------------------------------------------------

--
-- Structure de la table `sante`
--

DROP TABLE IF EXISTS `sante`;
CREATE TABLE IF NOT EXISTS `sante` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etat` text COLLATE utf8_bin NOT NULL,
  `idAnimal` int(11) NOT NULL,
  PRIMARY KEY (`id`,`idAnimal`),
  UNIQUE KEY `idAnimal` (`idAnimal`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `sante`
--

INSERT INTO `sante` (`id`, `etat`, `idAnimal`) VALUES
(1, 'bonne sante', 1),
(2, 'mal en point ', 2),
(3, 'patte casser', 3),
(4, 'cote fellé', 4);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `libelle`) VALUES
(1, 'humain'),
(2, 'serpent'),
(3, 'oiseau'),
(4, 'Graines/Fruits');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `idRole` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `idRole`) VALUES
(2, 'test', 'test@gmail.com', '$2a$12$ZY79WtgDydMbYL6DmBgUzeKsMIMEwsDqE1JSXP4diPRPJtZIixVUm', 1),
(3, 'tristan', 'tristan@gmail.com', '$2a$12$/c2OB4MxlR9xfQe8FN/p4OQHvU4TAoi2aQXBu4M1eU.Coq2E7fwvm', 2),
(1, 'merv', 'marvine@gmail.com', 'pass123', 2),
(11, 'ok', 'ok@ok.com', '$2a$12$3pugG/KoE3U45JNcAMrPXORfQELTk0WZ.0O/EdH//SPAz.oZnb3SW', 1),
(10, 'test', 'test@test.com', '$2a$12$0ICUM9v8iTAuewkLK9nOaeH4/AHLI.OSJaQYsZsfdqpQdE5/UAgJy', 2),
(9, 'merv', 'merv@gmail.Com', '$2a$12$jM4tKa.e/XTvjy6oRd8d/eSoxQ2DECZZ9fDDzuH4cszOGdLVagNa2', 1),
(8, 'admin', 'test@test.com', '$2a$12$gVqLS6CK1NV2dKMAz86YxefU.VvdQ5ASl.EmUN.OkLsfUzm9U4CRu', 1),
(12, 'admin1', 'admin1@gmail.com', '$2a$12$O00Z35QSSEjL.7XcmK/HLOAuWgdgU7lBPrJ3P7qMFWIS8bXrNS9Ou', 1),
(13, 'ded', 'deded', '$2a$12$qyoXx/lO10xu0BsgpMnQhOw/wx5g5ujbG0cQMIKleZposYrEBMLba', 1),
(14, 'eloi', 'eloi@', '$2a$12$jB5RIspdqzu0BN5AX5DHF.CHjwA3bvwaMUVVA4XxxzGOh9fKmkLyy', 1),
(15, 'marvine', 'marvine@gmail.com', '$2a$12$VmqKs3FW0VUjpoLFJfEMmex7hKZ1wWPiEoZmHf6EyNpfRoWfjDyUK', 1),
(16, 'tttt', 'fgdgdfg@', '$2a$12$cTP/lUyiD7//iOb.zmOEy.MxDVIe9qdSY2yKvHnD/Xlrxtwa4gV1a', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
