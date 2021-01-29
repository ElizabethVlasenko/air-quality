import React from 'react';
import './App.scss';
import HeroBlock from './components/HeroBlock/HeroBlock';
import Facts from './components/Facts/Facts';
import Footer from './components/Footer/Footer';
import SectorList from './components/SectorList/SectorList'
import AirQuality from './components/AirQuality/AirQuality'
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';

function App() {
  const partners = [
    shidLogo,
    ITNLogo,
    gcLogo
  ];
  const navLinks = [
    {
      id: '2561',
      title:"Основные факты",
      href:"#facts"
    },
    {
      id: '2562',
      title:"Индекс качества воздуха",
      href:"#quality"
    },
    {
      id: '2563',
      title:"Политика по уменьшению загрязнений",
      href:"#politics"
    }
  ];
  const factsSlides = [
    {
      id: '1323',
      imgUrl: require('./assets/facts-slider/slide-1.jpg'),
      desc:'Женщины и дети – главные жертвы загрязнения воздуха'
    },
    {
      id: '1324',
      imgUrl: require('./assets/facts-slider/slide-2.jpg'),
      desc:'Защитники окружающей среды подвергаются преследованиям'
    },
    {
      id: '1325',
      imgUrl: require('./assets/facts-slider/slide-3.jpg'),
      desc:'Загрязнение воздуха – нарушение прав человека'
    },
    {
      id: '1326',
      imgUrl: require('./assets/facts-slider/slide-4.jpg'),
      desc:'4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха'
    },
    {
      id: '1327',
      imgUrl: require('./assets/facts-slider/slide-5.jpg'),
      desc:'Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год.'
    }
  ];
  const sectors = [
    {
      id: '1423',
      imgUrl: require('./assets/sectors-items/sector-1.jpg'),
      name:'Промышленность',
      desc:'Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)'
    },
    {
      id: '1424',
      imgUrl: require('./assets/sectors-items/sector-2.jpg'),
      name:'Транспорт',
      desc:'Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы'
    },
    {
      id: '1425',
      imgUrl: require('./assets/sectors-items/sector-3.jpg'),
      name:'Городское планирование',
      desc:'Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов'
    },
    {
      id: '1426',
      imgUrl: require('./assets/sectors-items/sector-4.jpg'),
      name:'Энергия',
      desc:'Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения'
    },
    {
      id: '1427',
      imgUrl: require('./assets/sectors-items/sector-5.jpg'),
      name:'Энергетика',
      desc:' Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)'
    },
    {
      id: '1428',
      imgUrl: require('./assets/sectors-items/sector-6.jpg'),
      name:'Утилизация отходов',
      desc:'Cтратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов'
    },
  ];

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
            logos={partners} links={navLinks}  />
      <Facts title="Основные факты"
            slides={factsSlides}/>
      <AirQuality title="Индекс качества воздуха в режиме реального времени"
            subtitle="Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше."/>
      <SectorList title="Политика по уменьшению загрязнений"
            subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
            items={sectors}/>
      <Footer logos={partners} links={navLinks}/>
    </>
  );
}

export default App;