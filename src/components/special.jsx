import React from 'react'
import section4 from '../img/images/section4-img.png'
function Special(){

return(
<section className="special">
            <article>
                <header className="special-header">
                    <h2>ПАУЧИЙ АЖИОТАЖ</h2>
                    <h3>приобретай специальное издание</h3>
                </header>
                <figure className="special-img">
                    <img src={section4} alt="Image with all purchase content"/>
                    <figcaption>Внешний вид контента, получаемого в игре</figcaption>
                </figure>
                <p className="special-description">
                    На арене вы либо хищник, либо жертва. Застаньте зазевавшихся противников врасплох с изданием
                    Октейна, куда входят эксклюзивный облик легенды, набор тематических паучьих предметов и запас монет
                    Apex, которым можно полакомиться так, как вам угодно.
                    <br/>
                    Издание Октейна затаилось и ждет вас на Xbox One, PlayStation 4 и Origin для ПК, а скоро и в вашем
                    любимом розничном магазине за 1,499 руб**. Вот всё, что бережно завёрнуто в паутину издания:
                    <br/>
                    Издание Октейна

                </p>
                <ul className="special-content">
                    <li>Легендарный облик «Паучий ажиотаж» для Октейна</li>
                    <li>Легендарная паучья раскраска для энерговинтовки
                    </li>
                    <li>Эксклюзивный талисман для оружия «Фиолетовая вдова»
                    </li>
                    <li>Эксклюзивная эмблема «Ядовитый»
                    </li>
                    <li>1000 монет Apex</li>
                </ul>
                <footer className="special-footer">
                    Играйте в Apex Legends бесплатно* на <mark> Xbox One, PlayStation 4 и в Origin для ПК. </mark>

                    Следите за Apex Legends в Twitter и Instagram, подпишитесь на наш канал на YouTube и загляните на
                    наши форумы.

                    Подпишитесь на новостную рассылку, чтобы получать последние новости об Apex Legends, закулисный
                    контент, эксклюзивные предложения и многое другое (включая прочие новости EA, информацию о
                    продуктах, событиях и акциях) по электронной почте.
                    <br/>
                    <span>
                        * Может потребоваться учетная запись на соответствующей платформе и подписка платформы
                        (продается отдельно). Требуется постоянное подключение к Интернету и учетная запись EA.
                        Действуют возрастные ограничения. Включает в себя возможность совершать внутриигровые покупки.
                        <br/>
                        **ПРЕДЛОЖЕНИЯ МОГУТ ОТЛИЧАТЬСЯ ИЛИ БЫТЬ ИЗМЕНЕНЫ. ПОДРОБНЕЕ НА ВЕБ-САЙТАХ И В РЕКЛАМЕ РОЗНИЧНЫХ
                        ПРОДАВЦОВ
                    </span>
                </footer>
            </article>
        </section>
)

}

export default Special