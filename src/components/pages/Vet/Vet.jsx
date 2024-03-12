import style from "./Vet.module.css";

import Gallery from "../../Gallery/Gallery";


const Vet = () => {
   
    

    return (

        <div className={style.container}>

            <p className={style.p}>Мы являемся первой клиникой, которая стала проводить черезпросветную эндоскопию (гастроскопию, трахеоскопию, отоскопию, риноскопию, колоноскопию, вагиноскопию, цист-уретроскопию), что позволило нам диагностировать патологии и помогать животным, которых ранее отправляли в Россию или Литву. Уже с 2013 года мы безоперационно эндоскопически извлекаем инородные предметы из пищевода, желудка и трахеи у собак и кошек. С 2014 года мы проводим стентирование трахеи при коллапсе у миниатюрных собак и до сих пор остаемся единственными. <br /><br />
            В первые годы работы клиники мы открыли свою лабораторию, которая позволяет выполнять анализы крови за сорок минут и проводить многие другие исследования, стали выполнять УЗИ органов брюшной и грудной клетки собакам и кошкам, открыли рентген-кабинет с цифровым аппаратом, что позволяет нам получать снимки высокого качества за 2 минуты. <br /><br />
            Уже длительное время мы занимаемся ветеринарной травматологией и ортопедией. В клинике есть все необходимое оборудование, расходные материалы (пластины любого размера) для того, чтобы составить перелом как маленькому тойчику или котенку, так и огромному догу. <br /><br />
            С начала 2017 года мы начали выполнять лапароскопические операции – это операция без разрезов, когда все хирургические маневры выполняются под контролем камеры в брюшной полости. Это качественно новый этап в проведении операционных вмешательств у животных, за счет отсутствия разрезов значительно уменьшается травматизм операции, и животное легче восстанавливается.<br /><br />
            УЗИ сердца собакам и кошкам (ЭХОКГ) и электрокардиограмму мы проводим каждому пациенту перед наркозом, так как грамотная работа сердца – это необходимое условие безопасного наркоза. Кроме того, кардиолог сможет назначить дальнейшее лечение Вашему любимцу.<br /><br />
            В нашей клинике вы найдете ВСЕ ВИДЫ ВЕТЕРИНАРНЫХ УСЛУГ: от комплексной ветеринарной диагностики до эффективного лечения.
            </p>

            <Gallery/>
      
       </div>

    );
}

export default Vet;