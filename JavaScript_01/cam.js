    var pol = true;
    var pension = false;
    var years = prompt ('Ваша скорость?');
    years = parseInt(years, 10);

    
    if ( years>65 )
    {
  pension = true;
}
    pol = confirm('Повторно?');
    alert(' Ваше ФИО: ' + name + ' '+ family + ' ' + otchestvo + ' \n Вам ' + (years * 365) + ' дней! \n Вам ' + years + ' лет! \n Через 5 лет Вам будет ' + (years + 5) + ' лет!\n Вы '+ (pol ? 'женщина' : 'мужчина\n')+ 'Вы ' + (pension ? 'на пенсии' : 'не на пенсии'));
    