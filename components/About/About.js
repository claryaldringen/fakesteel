import Image from 'next/image'

import styles from './About.module.scss'
import { useScrollListener } from '../../hooks/useScrollListener'

export const About = ({ active, setActive }) => {
  useScrollListener('about', active, setActive)

  return (
    <div id="about" className={styles.about}>
      <h1>FAQ</h1>
      <h3>Who are we, and how did it start?</h3>
      <p>
        Two long-time friends Jakub and Adam, are behind the name FakeSteel
        Armory. We started airsoft together more than 15 years ago, which has
        lasted to this day. At the beginning of 2017, we also have fell head
        over heels into LARP battles, but we were annoyed that, unlike airsoft,
        LARP weapons in the Czech Republic do not always look completely
        believable. We ordered weapons from Canada to test, which look to us as
        the most beautiful design, but we quickly sobered upon them on the Czech
        battlefield. The foam handguard was too soft, the weapons too light and
        unbalanced. The blade was also, in our opinion, too flexible. In
        comparison with the weapons used in our country, they came on top only
        in appearance. So we decided to try to make an alternative and combine
        beauty with the Czech style of LARP fighting.
      </p>
      <h3>What type of weapons are they, and of what are they made of?</h3>

      <p>
        FakeSteel weapons are PU (polyurethane) foam swords and other weapons
        made focusing on LARP fantasy battles. They consist of a foam blade/head
        (very durable and flexible PU foam), a hard rubber hilt (partially
        bendable PU resin) or foam handle and fibreglass round or rectangular
        core. The swords are further balanced in the hilt or shaft by lead and a
        steel tube into which the core with the blade is glued. The handle is
        wrapped in genuine cow leather. All parts and materials of swords and
        other weapons come from the EU; we only outsource dagger blades from PG,
        as they are not subject to high resistance requirements. The weapons are
        hand-cast, painted and manufactured in Prague. Due to the fact that it
        is a manual production, not the work of machines, not every manufactured
        piece has the exact weight per gram or millimetre of the same length.
        However, we emphasize that each piece produced meets our strict criteria
        for appearance and quality.
      </p>
      <h3>
        How are FakeSteel weapons different from other foam weapons on the
        market?
      </h3>
      <p>
        After our experience from the Czech battles, we decided that we want to
        produce weapons that will resemble Western foam swords in design
        (Canada, Germany, Denmark or their Chinese copies), but at the same time
        will have a slightly higher weight and better control. We also place
        great emphasis on the Point of Balance of our weapons and try to move it
        to 10 cm (usually 7-8 cm) in front of the crossguard. When designing new
        weapons, we try to be as inspired as possible by real historical pieces
        and understand why and how different weapons looked like. The foam of
        the blade lasts a really long time. We have successfully used weapons in
        Czech soft and hard "Kekel" battles. However, no foam is indestructible.
        The sword will last depending on the style of fencing and the force with
        which you strike hard sharper materials.
      </p>
      <h3>How to order, and how long does delivery take?</h3>
      <p>
        At the moment, you can order in the messenger on our Facebook; we will
        be happy to advise you and arrange it with you. {/*Or you can use the order
        form on our website.*/} Alternatively, contact us on our email (<a href="mailto:info@fakesteel.cz">info@fakesteel.cz</a>) or
        Instagram. We currently manufacture larp weapons mostly to order
        individually, and with a few exceptions, we do not have goods in stock.
        So your weapons go into production only after ordering and paying.
        Production takes about 30 days. We try to send the weapons as quickly as
        possible, but we cannot guarantee precisely when we will complete the
        order. We are currently around 20-40 days on average.
      </p>
      <h3>Round or rectangular fiberglass core?</h3>
      <p>
        When ordering, you must choose whether you want a round 10mm core or a
        15x6mm rectangular core. Round core: the sword is generally about 50 g
        lighter. The round core bends a little and vibrates in the same way in
        all directions, even in the direction of the blow. This core has no
        weakness in any direction where is a greater risk of breakage.
        Rectangular core: the sword is generally about 50 g heavier. The
        rectangle behaves more like an actual sword blade. It does not bend and
        vibrates only minimally in the direction of the cut; on the contrary,
        when you hit flat, it bends and vibrates even more than the round core.
        With strong or frequent blows from the flat side of the blade, there is
        a more considerable risk of damaging the rectangular core than with a
        round one. The rectangular core is better for fencing.
      </p>
      <p>
        It is also possible to choose a heavier and more durable 16x8mm
        rectangular core. The weapon will be about another 50g heavier, and the
        PoB will move a little more to the tip of the sword. However, the
        overall durability and strength of the weapon will significantly
        increase. Suitable if you want to use the weapon primarily for hard
        battles in armour. Such as the Czech "kekel".
      </p>
      <Image src="/images/construction.png" width={2048} height={1954} />
      <h3>How to take care of weapons and repair them?</h3>
      <p>
        All double-edged and single-edged sword blades are made with reinforced
        tips. A rubber tube is poured into the tip of the blade together with
        the core. Thanks to this, a robust and flexible skeleton is created in
        the tip of the blade, thus significantly increasing the resistance of
        the weakest link of the blade - the tip. We also make similar type of
        rubber skeleton in our Warhammers.
      </p>
      <p>
        If the weapon is torn, it is good to repair it with a high-quality
        flexible adhesive glueing PUR (e.g. our favourite flexible instant
        adhesive with a mixture of rubber-Loctite Super Attak Power Flex gel,
        which fills up and strengthens the crack after about 10 minutes). The
        sword's colour can be restored or changed at your discretion with other
        colours made for plastics. Do not cut into weapons with sharp objects.
        Do not hit hard or heavy obstacles, such as a rock, benches or trees.
        Try to avoid a substantial impact on sharp parts of the armour. Also,
        pay attention to the sharp edges of plate gloves, some tend to cut into
        crossguards or other parts of the sword when fencing from below, and
        there is a risk of unnecessary damage to the hilt. Pay close attention
        to long-term bends to protect, e.g. during storage. Flexible crossguards
        made of hard rubber do not mind blows in combat. They bend slightly at
        most but return immediately. The problem can occur during extreme
        bending, for example, in the trunk of a car, when the sword is put under
        luggage, and the crossguard is bent at a sharp angle under pressure for
        a long time.
      </p>
      <h3>How safe are weapons? Is it possible to thrust with them?</h3>
      <p>
        We recommend fighting with our weapons in protective equipment
        (quilted/padded clothing, gloves, helmet, or other pieces of armour)
        that matches the style and strength of your fencing. It is your
        responsibility to keep the strikes damped and not directed at sensitive
        areas such as the head, face, crotch, etc. Attack your opponents wisely
        and responsibly. Weapons were not designed for stabbing, which is banned
        in the Czech Republic at most battles and LAPRs. However, the design of
        weapons allows stabbing, but we do not recommend it as a manufacturer,
        and we do not think it is safe to stab with any weapon without eye
        protection.
      </p>
      <h3>
        What weapons can the scabbard be ordered for, and how are they designed?
      </h3>
      <p>
        We currently offer scabbards for one type of one-handed blades and all
        daggers. The scabbards for swords have a durable PP plastic core and are
        covered with leather and a steel or brass chape; they also have a
        leather belt with a brass buckle. The sheaths for the daggers are only
        leather with a steel or brass chape.
      </p>
      <p>
        We believe that you will like our weapons and that you will be maximally
        satisfied with them!
      </p>
      <p>Jakub and Adam - FakeSteel Armory</p>
    </div>
  )
}
