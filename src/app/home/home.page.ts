import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public places = [];
  public search = "";

  constructor() {


    this.places.push({
      image: "https://i.pinimg.com/236x/49/58/5c/49585c0e644c3f45a7f722a5cfad2675--viva-mexico-cultural.jpg",
      title: "Tecuala, Nayarit",
      subtitle: "Iglesia del sagrado corazon de jesus",
      description: 'Conocido como el recinto mas iconico del municipio de tecuala la orgullosa, la iglesia del sagrado corazon de jesus es construida desde 1915 hasta el 1918 por el pbro. Francisco Cisneros con el apoyo del pueblo tecualense',
      active: true
    });
    this.places.push({
      image: "https://calisphere.org/crop/300x300/f5eff199c5f5defaf9e1560cb3c03895",
      title: "Tepic, Nayarit",
      subtitle: "Catedral de Tepic",
      description: 'Es el templo más importante de la diócesis de Tepic. Fue designado catedral por el Papa León XIII en 1891. ... En su diseño destacan variados elementos, por ejemplo, su portada de estilo ecléctico que combina el arco    trilobulado morisco de su acceso con el arco ojival gótico de las ventanas del coro.',
      active: false
    });

    this.places.push({
      image: "https://live.staticflickr.com/2089/2217493204_e6e199ef12_z.jpg",
      title: "Acaponeta, Nayarit",
      subtitle: "Templo Parroquial de Nuestra Señora de la Asunción",
      description: 'Conocido por ser uno de los primeros templos de la antigua nueva galicia, el templo de acaponeta atrae a los turistas por sus historias remotas desde la conquista por parte  de Nuño beltran de Guzman, este recinto emana una biblia de anecdotas que traen a este municipio como uno de los abuelos del entonces nueva galicia a lo que hoy es el estado de Nayarit.'
    });

    this.places.push({
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Ahuacatlan_de_Noche.jpg",
      title: "Ahuacatlan, Nayarit",
      subtitle: "Cabecera municipal de ahuacatlan",
      description: 'Fundada por la tribu Nahoa,en su peregrinar hacia el centro del Anáhuac. ...Hasta mediados del siglo XIX, Ahuacatlán permaneció como uno de los más importantes núcleos de población en el sur de Nayarit.'
    });

    this.places.push({
      image: "https://i.pinimg.com/236x/49/58/5c/49585c0e644c3f45a7f722a5cfad2675--viva-mexico-cultural.jpg",
      title: "Amatlan de Cañas, Nayarit",
      subtitle: "El Manto de Amatlan de Cañas",
      description: 'La palabra náhuatl Amatlán, "Lugar donde abunda el amate y papel", se compone de los vocablos "Amtl", árbol conocido como "Ámate y Papel" y "Tlán", lugar donde abunda. A la creación del municipio se le incorporó al nombre la palabra cañas, por contar con trapiches y molienda de caña de azúcar.'
    });
    this.places.push({
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Catedral_de_Santiago_de_Compostela_agosto_2018_%28cropped%29.jpg/300px-Catedral_de_Santiago_de_Compostela_agosto_2018_%28cropped%29.jpg",
      title: "Compostela, Nayarit",
      subtitle: "Catedral de Compostela",
      description: 'Compostela, cuyo nombre completo es Villa de Santiago de Galicia de Compostela de Indias, forma parte de los pueblos mágicos de México. Se trata de una ciudad colonizada por el Imperio Español que perteneció a la antigua provincia de Nueva Galicia. Fundada en 1530 por Nuño Beltrán de Guzmán, antes había sido habitada por los pueblos indígenas de los señoríos de Mazatlán.'
    });

    this.places.push({
      image: "https://gentenayarit.com/wp-content/uploads/2017/11/12783748_343344112455941_1820759188933408164_o.jpg.opt381x286o00s381x286-300x225.jpg",
      title: "Huajicori, Nayarit",
      subtitle: "Aguas Termales de Caramota en Huajicori",
      description: 'Caramota es un balneario con albercas de agua sulforosa, dicho tipo de agua, es conocido y aprovechado desde hace siglos. Se caracterizan por ser un tipo de agua medicinal que tienen una concentración de sulfuro de hidrógeno superior a 1mg/l.'
    });

    this.places.push({
      image: "https://blog.rivieranayarit.com.mx/wp-content/uploads/2012/11/20_andanzas_nov_09.jpg",
      title: "Ixtlan del Rio, Nayarit<",
      subtitle: "Cristo Rey, Ixtlan del Rio",
      description: 'Este enigmatica estatua en lo alto del cerro del Cristo Rey se da la fiesta de Cristo Rey en la última semana del mes de Octubre, donde la feligresía por nueve días sube al cerrito donde se encuentra el Cristo. El último domingo de octubre es la gran fiesta en donde el pueblo es visitado por cientos de gentes.'
    });

    this.places.push({
      image: "https://i.pinimg.com/236x/49/58/5c/49585c0e644c3f45a7f722a5cfad2675--viva-mexico-cultural.jpg",
      title: "Jala, Nayarit",
      subtitle: "Volcan Ceboruco en Jala",
      description: 'Prepárate para vivir la mejor experiencia de aventura durante tu viaje a Jala, solo debes salir del pueblo y en 40 minutos llegarás al impresionante volcán El Ceboruco, el cual alcanza una altitud de 2,280 metros (7,480 pies) sobre el nivel del mar.'
    });

    this.places.push({
      image: "https://centronayarit.files.wordpress.com/2012/10/los-rosales.png",
      title: "Xalisco, Nayarit",
      subtitle: "Balneario los Rosales en Xalisco",
      description: 'Hermosa toma del Balneario “LOS ROSALES” en la localidad de Pantanal, municipio de XALISCO, donde nace el agua y a diario transita, para disfrutar un agradable momento en compañía de la familia. ¡Ven y VISITA XALISCO!'
    });

    this.places.push({
      image: "https://i.pinimg.com/236x/49/58/5c/49585c0e644c3f45a7f722a5cfad2675--viva-mexico-cultural.jpg",
      title: "Ruiz, Nayarit",
      subtitle: "Cabecera del municipio de Ruiz",
      description: 'A 45 minutos de la Capital Nayarita se encuentra Ruiz, un pueblo pintoresco rodeado de hermosos paisajes, con    una vegetación exuberante y balnearios naturales. Este lugar es uno de los accesos para visitar la Sierra del Nayar y los Estados de Durango y Zacatecas.'
    });
    this.places.push({
      image: "https://i.pinimg.com/236x/49/58/5c/49585c0e644c3f45a7f722a5cfad2675--viva-mexico-cultural.jpg",
      title: "San Blas, Nayarit",
      subtitle: "Puerto de San Blas",
      description: 'San Blas es el tipo de destino perfecto para pasear con la familia y amigos un fin de semana. A lo largo de sus 7 kilómetros de finísima arena se puede disfrutar de un divertido partido de fútbol, caminatas a la orilla del mar, o intentar montar una ola sobre una tabla de surf.'
    });

    this.places.push({
      image: "https://cdn1.yumping.com.mx/emp/fotos/4/3/6/0/3/tm_p-43603-laguna-santa-maria-del-oro_14684349463036.jpg",
      title: "San Pedro Lagunillas, Nayarit",
      subtitle: "Templo de San Pedro Lagunillas",
      description: 'fue un pueblo indígena llamado "Ximochoque", el cual se constituyó como uno de los cacicazgos del reino de Xalisco. ... El 6 de mayo de 1861, Manuel Lozada atacó e incendió San Pedro Lagunillas donde murieron 260 personas, en la hoy conocida, plaza de "Los mártires".'
    });

    this.places.push({
      image: "https://64.media.tumblr.com/318b6a858d3d196c90d54686a2036d9c/tumblr_no9jpu4Va01rw4vj0o3_500.jpg",
      title: "SAMAO, Nayarit",
      subtitle: "Laguna de Santa Maria del Oro",
      description: 'En Santa Maria del Oro se encuentra una laguna de casi 2.25 kilómetros de largo por 1.2 de ancho y esta ubicada dentro de un cráter volcánico. Este cráter se formó por la caída de un meteorito hace miles de años. Los locales cuentan la historia de que no se había encontrado el fondo de la laguna a lo cual los estudiosos explican que el impacto atravesó profundas capas de tierra. Sin embargo, un estudio encontró que su profundidad es de 60 mts.'
    });

    this.places.push({
      image: "https://www.corazondenayarit.com/wp-content/uploads/2019/06/santiago-ixcuintla-nayarit2.jpg",
      title: "Santiago Ixcuintla, Nayarit",
      subtitle: "Templo del señor de la ascención de Santiago Ixcuintla",
      description: 'Cuenta la leyenda que El Señor de la Ascensión de la ciudad de Santiago Ixcuintla, llegó por si solo a esa bella ciudad, en la creciente del río, donde inundo todo el poblado y la corriente entro al templo, depositando hasta el altar, la imagen del señor de la ascensión tallada en madera. Esto y mas se habla de aquel recinto en el municipio de Santiago Ixcuintla Nayarit'
    });

    this.places.push({
      image: "https://lh3.googleusercontent.com/proxy/t2qa2cCSFkYrDIHYRW9c6JgZ09K4O5TwIthQ6CO0oW_UFlPNdONb6KtLgQ0XPdB8zYonjg3xp_hMCtoBgX2itd77h91NT7flG5gBHLL2yATMizwoGuJ9IxInRm-sOMLRjqwUGgmGFJPsrr36V4qFT4Sxa31QUUClNWb7Wx-BkgKDSQzrPQ"
      , title: "Tuxpan Nayarit",
      subtitle: "Tuxpan Nayarit",
      description: 'Después de la Independencia, Tuxpan fue subprefectura del naciente territorio de Tepic, posteriormente, se anexó al municipio de Santiago Ixcuintla y, a partir de la promulgación de la Constitución de 1917, quedó constituida como municipio del Estado Libre y Soberano de Nayarit.'
    });

    this.places.push({
      image: "https://www.orangesmile.com/extreme/img/main/la-yesca-dam_1.jpg",
      title: "La Yesca, Nayarit",
      subtitle: "Iglesia del sagrado corazon de jesus",
      description: 'Su nombre se deriva de una especie de madera porosa y fofa llamada "Yesca". Ésta abunda en todo el municipio y se enciende al tallar el pedernal y el eslabón. La región serrana fue habitada por los huicholes, que durante el proceso de colonización y evangelización fundaron las misiones de Huajimic en 1610, Amatlán de Jora en 1620 y Camotlán en 1642'
    });

    this.places.push({
      image: "https://images.bestday.com/_lib/images/CONTENIDO-EDITORIAL/Sabias-Que/Mexico/Puerto-Vallarta/Bahia-de-Banderas/Bahia-de-Banderas-Vallarta.jpg",
      title: "Bahia de Banderas, Nayarit",
      subtitle: "Bahia de Banderas, Nayarit",
      description: ' El municipio de Bahía de Banderas es el de más reciente creación del estado de Nayarit, fue creado por decreto del 18 de septiembre de 1989 emitido por el Congreso de Nayarit a propuesta del gobernador Celso Humberto Delgado, siendo segregado su territorio del municipio de Compostela.'
    });
  }

  filter(): void{
    console.log('buscando..' + this.search);

    this.places = this.places.filter((a) =>{
      return (a.title.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);

    });
  }
  deletePlace(pos: number): void{
    this.places.splice(pos, 1);
  }
  changeStatus(pos: number): void{
    this.places[pos].active = !this.places[pos].active;
  }
}
