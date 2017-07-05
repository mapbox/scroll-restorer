import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExampleContainer extends Component {
  componentDidUpdate(prevProps) {
    // Scroll to top whenever the route changes.
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return dummyContent[this.props.match.params.exampleID];
  }
}

ExampleContainer.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object
};

const dummyContent = {
  1: (
    <div className="prose">
      <h1>Quis istud possit, inquit, negare?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est enim tanti
        philosophi tamque nobilis audacter sua decreta defendere. Quos nisi
        redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est.
        Duo Reges: constructio interrete. Cur igitur, cum de re conveniat, non
        malumus usitate loqui? Verba tu fingas et ea dicas, quae non sentias?
        Quid ait Aristoteles reliquique Platonis alumni?{' '}
      </p>
    </div>
  ),
  2: (
    <div className="prose">
      <h1>
        Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur
        esse inanitas ista verborum.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ad haec,
        nisi molestum est, habeo quae velim. Ostendit pedes et pectus. Et nunc
        quidem quod eam tuetur, ut de vite potissimum loquar, est id
        extrinsecus; Serpere anguiculos, nare anaticulas, evolare merulas,
        cornibus uti videmus boves, nepas aculeis. Duo Reges: constructio
        interrete. Ostendit pedes et pectus.{' '}
      </p>
      <blockquote>
        Quos ille, di inmortales, cum omnes artus ardere viderentur, cruciatus
        perferebat! nec tamen miser esse, quia summum id malum non erat, tantum
        modo laboriosus videbatur;
      </blockquote>
      <h2>
        Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare.
      </h2>
      <p>
        Itaque hic ipse iam pridem est reiectus; Quod autem ratione actum est,
        id officium appellamus. Familiares nostros, credo, Sironem dicis et
        Philodemum, cum optimos viros, tum homines doctissimos. Et ille ridens:
        Video, inquit, quid agas; <i>Suo genere perveniant ad extremum;</i>{' '}
        Expressa vero in iis aetatibus, quae iam confirmatae sunt. Ut alios
        omittam, hunc appello, quem ille unum secutus est. Sed quae tandem ista
        ratio est? Cur post Tarentum ad Archytam? <i>Itaque ab his ordiamur.</i>{' '}
        Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.{' '}
      </p>
    </div>
  ),
  3: (
    <div className="prose">
      <h1>
        Incommoda autem et commoda-ita enim estmata et dustmata appello-communia
        esse voluerunt, paria noluerunt.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ratio quidem
        vestra sic cogit. <i>Sed haec omittamus;</i> E quo efficitur, non ut nos
        non intellegamus quae vis sit istius verbi, sed ut ille suo more
        loquatur, nostrum neglegat. Cognitio autem haec est una nostri, ut vim
        corporis animique norimus sequamurque eam vitam, quae rebus iis ipsis
        perfruatur. Quodsi vultum tibi, si incessum fingeres, quo gravior
        viderere, non esses tui similis; Duo Reges: constructio interrete.
        Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum
        municipium esse existimet? Hic ego: Etsi facit hic quidem, inquam, Piso,
        ut vides, ea, quae praecipis, tamen mihi grata hortatio tua est.{' '}
      </p>
      <p>
        <i>Summum a vobis bonum voluptas dicitur.</i> An dubium est, quin virtus
        ita maximam partem optineat in rebus humanis, ut reliquas obruat?
        Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine
        nostros. Sed ad illum redeo. Aliam vero vim voluptatis esse, aliam nihil
        dolendi, nisi valde pertinax fueris, concedas necesse est. Inquit,
        respondet: Quia, nisi quod honestum est, nullum est aliud bonum! Non
        quaero iam verumne sit;{' '}
      </p>
      <p>
        <b>Quis est tam dissimile homini.</b> Quid est, quod ab ea absolvi et
        perfici debeat? Quantum Aristoxeni ingenium consumptum videmus in
        musicis? Quodcumque in mentem incideret, et quodcumque tamquam
        occurreret. Primum cur ista res digna odio est, nisi quod est turpis?
        Itaque primos congressus copulationesque et consuetudinum instituendarum
        voluntates fieri propter voluptatem; Sunt autem, qui dicant foedus esse
        quoddam sapientium, ut ne minus amicos quam se ipsos diligant. Sin
        tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Nam
        Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro,
        repudiare tantum beneficium noluisse; Tu autem inter haec tantam
        multitudinem hominum interiectam non vides nec laetantium nec dolentium?
        Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut
        id ipsum, quod interest, non sit magnum. Quae cum ita sint, effectum est
        nihil esse malum, quod turpe non sit. Cur post Tarentum ad Archytam?
        Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et
        luxuriosus eodem modo.{' '}
      </p>
      <ol>
        <li>
          Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et
          quidem corpore perceptarum.
        </li>
        <li>
          Quando enim Socrates, qui parens philosophiae iure dici potest,
          quicquam tale fecit?
        </li>
        <li>
          Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt
          opiniones ac iudicia levitatis.
        </li>
        <li>
          Quae tamen a te agetur non melior, quam illae sunt, quas interdum
          optines.
        </li>
      </ol>
      <blockquote>
        Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera,
        coniungi debuerunt;
      </blockquote>
      <dl>
        <dt>
          <dfn>Respondeat totidem verbis.</dfn>
        </dt>
        <dd>
          In his igitur partibus duabus nihil erat, quod Zeno commutare
          gestiret.
        </dd>
        <dt>
          <dfn>Immo videri fortasse.</dfn>
        </dt>
        <dd>
          Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid
          fugere debeant?
        </dd>
        <dt>
          <dfn>Proclivi currit oratio.</dfn>
        </dt>
        <dd>Hoc non est positum in nostra actione.</dd>
        <dt>
          <dfn>Age sane, inquam.</dfn>
        </dt>
        <dd>
          Qualis ista philosophia est, quae non interitum afferat pravitatis,
          sed sit contenta mediocritate vitiorum?
        </dd>
      </dl>
    </div>
  ),
  4: (
    <div className="prose">
      <h1>Mihi, inquam, qui te id ipsum rogavi?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quorum altera
        prosunt, nocent altera. Quid dubitas igitur mutare principia naturae? Et
        nemo nimium beatus est; Itaque his sapiens semper vacabit. Nam ista
        vestra: Si gravis, brevis; <b>Duo Reges: constructio interrete.</b>{' '}
      </p>
      <ol>
        <li>
          Neque enim civitas in seditione beata esse potest nec in discordia
          dominorum domus;
        </li>
        <li>
          Incommoda autem et commoda-ita enim estmata et dustmata
          appello-communia esse voluerunt, paria noluerunt.
        </li>
        <li>Oratio me istius philosophi non offendit;</li>
        <li>Solum praeterea formosum, solum liberum, solum civem, stultost;</li>
        <li>
          Ab his oratores, ab his imperatores ac rerum publicarum principes
          extiterunt.
        </li>
        <li>
          Videmusne ut pueri ne verberibus quidem a contemplandis rebus
          perquirendisque deterreantur?
        </li>
      </ol>
      <p>
        <mark>Sequitur disserendi ratio cognitioque naturae;</mark> Minime vero
        istorum quidem, inquit. <b>Quid, de quo nulla dissensio est?</b> Quae
        cum essent dicta, discessimus. Quae sequuntur igitur?{' '}
      </p>
    </div>
  ),
  5: (
    <div className="prose">
      <h1>Fortasse id optimum, sed ubi illud: Plus semper voluptatis?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sic enim
        censent, oportunitatis esse beate vivere. Apparet statim, quae sint
        officia, quae actiones. Quae cum ita sint, effectum est nihil esse
        malum, quod turpe non sit. Omnia contraria, quos etiam insanos esse
        vultis. Duo Reges: constructio interrete.{' '}
      </p>
      <dl>
        <dt>
          <dfn>Quare conare, quaeso.</dfn>
        </dt>
        <dd>
          Cuius ad naturam apta ratio vera illa et summa lex a philosophis
          dicitur.
        </dd>
        <dt>
          <dfn>Quae sequuntur igitur?</dfn>
        </dt>
        <dd>
          Et quidem, Cato, hanc totam copiam iam Lucullo nostro notam esse
          oportebit;
        </dd>
      </dl>
      <ol>
        <li>
          Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.
        </li>
        <li>
          Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae
          accepimus.
        </li>
      </ol>
      <ol>
        <li>Quo plebiscito decreta a senatu est consuli quaestio Cn.</li>
        <li>
          Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil
          post mortem ad nos pertinere?
        </li>
        <li>
          Cum salvum esse flentes sui respondissent, rogavit essentne fusi
          hostes.
        </li>
        <li>
          Sed quid minus probandum quam esse aliquem beatum nec satis beatum?
        </li>
      </ol>
      <p>
        <i>Id est enim, de quo quaerimus.</i> Si sapiens, ne tum quidem miser,
        cum ab Oroete, praetore Darei, in crucem actus est. Vitae autem degendae
        ratio maxime quidem illis placuit quieta. Haec et tu ita posuisti, et
        verba vestra sunt. Semovenda est igitur voluptas, non solum ut recta
        sequamini, sed etiam ut loqui deceat frugaliter. Commentarios quosdam,
        inquam, Aristotelios, quos hic sciebam esse, veni ut auferrem, quos
        legerem, dum essem otiosus; Non ego tecum iam ita iocabor, ut isdem his
        de rebus, cum L. <b>Zenonis est, inquam, hoc Stoici.</b> Quod cum
        accidisset ut alter alterum necopinato videremus, surrexit statim. Atque
        haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia.{' '}
      </p>
      <dl>
        <dt>
          <dfn>At certe gravius.</dfn>
        </dt>
        <dd>Conferam tecum, quam cuique verso rem subicias;</dd>
        <dt>
          <dfn>Recte dicis;</dfn>
        </dt>
        <dd>Nos vero, inquit ille;</dd>
        <dt>
          <dfn>Recte, inquit, intellegis.</dfn>
        </dt>
        <dd>
          Quos quidem tibi studiose et diligenter tractandos magnopere censeo.
        </dd>
        <dt>
          <dfn>Poterat autem inpune;</dfn>
        </dt>
        <dd>Torquatus, is qui consul cum Cn.</dd>
      </dl>
      <p>
        Expectoque quid ad id, quod quaerebam, respondeas. Quae etsi mihi nullo
        modo probantur, tamen Democritum laudatum a ceteris ab hoc, qui eum unum
        secutus esset, nollem vituperatum.{' '}
        <i>Dat enim intervalla et relaxat.</i> Quodsi, ne quo incommodo
        afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut
        moriatur optabis. Ergo in gubernando nihil, in officio plurimum
        interest, quo in genere peccetur. Piso, familiaris noster, et alia multa
        et hoc loco Stoicos irridebat: Quid enim? Nec enim, omnes avaritias si
        aeque avaritias esse dixerimus, sequetur ut etiam aequas esse dicamus.
        Hanc ergo intuens debet institutum illud quasi signum absolvere. Habes,
        inquam, Cato, formam eorum, de quibus loquor, philosophorum.{' '}
        <i>Hunc vos beatum;</i>{' '}
      </p>
      <h5>Sic enim censent, oportunitatis esse beate vivere.</h5>
      <p>
        Iis igitur est difficilius satis facere, qui se Latina scripta dicunt
        contemnere. Is ita vivebat, ut nulla tam exquisita posset inveniri
        voluptas, qua non abundaret. Themistocles quidem, cum ei Simonides an
        quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Sed
        est forma eius disciplinae, sicut fere ceterarum, triplex: una pars est
        naturae, disserendi altera, vivendi tertia. Aliena dixit in physicis nec
        ea ipsa, quae tibi probarentur; Non enim ipsa genuit hominem, sed
        accepit a natura inchoatum. Vide ne ista sint Manliana vestra aut maiora
        etiam, si imperes quod facere non possim.{' '}
      </p>
      <p>
        Perfecto enim et concluso neque virtutibus neque amicitiis usquam locum
        esse, si ad voluptatem omnia referantur, nihil praeterea est magnopere
        dicendum. Et ais, si una littera commota sit, fore tota ut labet
        disciplina. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium
        consuetudo Latina traduceret. Non elogia monimentorum id significant,
        velut hoc ad portam: Hunc unum plurimae consentiunt gentes populi
        primarium fuisse virum. <mark>Graccho, eius fere, aequalí?</mark>{' '}
        <mark>Comprehensum, quod cognitum non habet?</mark> Ille vero, si
        insipiens-quo certe, quoniam tyrannus -, numquam beatus;{' '}
      </p>
      <p>
        Sin laboramus, quis est, qui alienae modum statuat industriae? Nemo enim
        est, qui aliter dixerit quin omnium naturarum simile esset id, ad quod
        omnia referrentur, quod est ultimum rerum appetendarum. Tuo vero id
        quidem, inquam, arbitratu. Nam illud quidem adduci vix possum, ut ea,
        quae senserit ille, tibi non vera videantur. Quod mihi quidem visus est,
        cum sciret, velle tamen confitentem audire Torquatum. Sin te auctoritas
        commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
        anteponebas? Hoc enim identidem dicitis, non intellegere nos quam
        dicatis voluptatem. <i>Sin aliud quid voles, postea.</i> Quorum sine
        causa fieri nihil putandum est. Hoc etsi multimodis reprehendi potest,
        tamen accipio, quod dant. Vos autem cum perspicuis dubia debeatis
        illustrare, dubiis perspicua conamini tollere. Quod dicit Epicurus etiam
        de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui.
        Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis
        voluptatibus?{' '}
      </p>
      <h3>Quamquam haec quidem praeposita recte et reiecta dicere licebit.</h3>
      <p>
        Quaesita enim virtus est, non quae relinqueret naturam, sed quae
        tueretur. Non prorsus, inquit, omnisque, qui sine dolore sint, in
        voluptate, et ea quidem summa, esse dico. Sine ea igitur iucunde negat
        posse se vivere? Aut haec tibi, Torquate, sunt vituperanda aut
        patrocinium voluptatis repudiandum. Vide, ne etiam menses! nisi forte
        eum dicis, qui, simul atque arripuit, interficit. Sed dum efficere
        vultis beatum sapientem, cum maximas animo voluptates percipiat
        omnibusque partibus maiores quam corpore, quid occurrat non videtis.
        Animadverti, ínquam, te isto modo paulo ante ponere, et scio ab Antiocho
        nostro dici sic solere; Etiam inchoatum, ut, si iuste depositum reddere
        in recte factis sit, in officiis ponatur depositum reddere; Mihi quidem
        Homerus huius modi quiddam vidisse videatur in iis, quae de Sirenum
        cantibus finxerit. <i>Sed residamus, inquit, si placet.</i> Quid enim
        est a Chrysippo praetermissum in Stoicis? Nullis enim partitionibus,
        nullis definitionibus utuntur ipsique dicunt ea se modo probare, quibus
        natura tacita adsentiatur.{' '}
      </p>
      <p>
        Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam;
        Apud ceteros autem philosophos, qui quaesivit aliquid, tacet;{' '}
        <mark>Invidiosum nomen est, infame, suspectum.</mark>{' '}
        <b>Cave putes quicquam esse verius.</b> <b>Audeo dicere, inquit.</b>{' '}
        Eadem nunc mea adversum te oratio est. Callipho ad virtutem nihil
        adiunxit nisi voluptatem, Diodorus vacuitatem doloris. Si ista mala
        sunt, in quae potest incidere sapiens, sapientem esse non esse ad beate
        vivendum satis. Quae cum essent dicta, discessimus.{' '}
        <b>Quid enim possumus hoc agere divinius?</b>{' '}
      </p>
      <ol>
        <li>
          Aut, Pylades cum sis, dices te esse Orestem, ut moriare pro amico?
        </li>
        <li>
          Etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo
          nos abducat?
        </li>
        <li>
          An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?
        </li>
        <li>Et ille ridens: Video, inquit, quid agas;</li>
      </ol>
      <blockquote cite="http://loripsum.net">
        Voluptatis causa, etiam si eam non consequare, aut non dolendi, etiam si
        id assequi nequeas, aut eorum, quae secundum naturam sunt, adipiscendi,
        etiam si nihil consequare.
      </blockquote>
      <ul>
        <li>
          Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges,
          Galloni! es homo miser, inquit.
        </li>
        <li>
          Videsne ut, quibus summa est in voluptate, perspicuum sit quid iis
          faciendum sit aut non faciendum?
        </li>
        <li>
          Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc
          quidem hactenus;
        </li>
        <li>
          Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et
          comparari potest.
        </li>
      </ul>
      <p>
        Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos
        quoque concedimus; Mihi quidem Homerus huius modi quiddam vidisse
        videatur in iis, quae de Sirenum cantibus finxerit. Est autem situm in
        nobis ut et adversa quasi perpetua oblivione obruamus et secunda iucunde
        ac suaviter meminerimus. Possumusne hic scire qualis sit, nisi
        contulerimus inter nos, cum finem bonorum dixerimus, quid finis, quid
        etiam sit ipsum bonum? Hoc unum Aristo tenuit: praeter vitia atque
        virtutes negavit rem esse ullam aut fugiendam aut expetendam. Quae quo
        sunt excelsiores, eo dant clariora indicia naturae.{' '}
      </p>
      <blockquote cite="http://loripsum.net">
        Nam omnia, quae sumenda quaeque legenda aut optanda sunt, inesse debent
        in summa bonorum, ut is, qui eam adeptus sit, nihil praeterea desideret.
      </blockquote>
      <dl>
        <dt>
          <dfn>Sed nimis multa.</dfn>
        </dt>
        <dd>
          Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam
          Zenoni desciscendi fuisse.
        </dd>
        <dt>
          <dfn>Nos commodius agimus.</dfn>
        </dt>
        <dd>
          Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus
          gratiam.
        </dd>
        <dt>
          <dfn>An potest cupiditas finiri?</dfn>
        </dt>
        <dd>Easdemne res?</dd>
      </dl>
      <p>
        Quid, quod res alia tota est? Sit hoc ultimum bonorum, quod nunc a me
        defenditur; Princeps huius civitatis Phalereus Demetrius cum patria
        pulsus esset iniuria, ad Ptolomaeum se regem Alexandream contulit. Et
        quidem, Cato, hanc totam copiam iam Lucullo nostro notam esse oportebit;
        Nam, ut saepe iam dixi, in infirma aetate inbecillaque mente vis naturae
        quasi per caliginem cernitur; <i>Non est igitur voluptas bonum.</i> Nam
        cui proposito sit conservatio sui, necesse est huic partes quoque sui
        caras suo genere laudabiles. Nec vero intermittunt aut admirationem
        earum rerum, quae sunt ab antiquis repertae, aut investigationem
        novarum. <i>Idem adhuc;</i> Satisne ergo pudori consulat, si quis sine
        teste libidini pareat?{' '}
      </p>
      <h4>Sine ea igitur iucunde negat posse se vivere?</h4>
      <p>
        <i>Hunc vos beatum;</i> Videmus igitur ut conquiescere ne infantes
        quidem possint. <b>Sedulo, inquam, faciam.</b> Animadverti, ínquam, te
        isto modo paulo ante ponere, et scio ab Antiocho nostro dici sic solere;
        Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Ac
        ne plura complectar-sunt enim innumerabilia-, bene laudata virtus
        voluptatis aditus intercludat necesse est. Eorum enim omnium multa
        praetermittentium, dum eligant aliquid, quod sequantur, quasi curta
        sententia; Egone non intellego, quid sit don Graece, Latine voluptas?
        Sic enim maiores nostri labores non fugiendos tristissimo tamen verbo
        aerumnas etiam in deo nominaverunt. Sin autem ad animum, falsum est,
        quod negas animi ullum esse gaudium, quod non referatur ad corpus. Quae
        sequuntur igitur? Sed vobis voluptatum perceptarum recordatio vitam
        beatam facit, et quidem corpore perceptarum. Ratio ista, quam defendis,
        praecepta, quae didicisti, quae probas, funditus evertunt amicitiam,
        quamvis eam Epicurus, ut facit, in caelum efferat laudibus. De maximma
        autem re eodem modo, divina mente atque natura mundum universum et eius
        maxima partis administrari.{' '}
      </p>
      <h2>Cyrenaici quidem non recusant;</h2>
      <p>
        Totum autem id externum est, et quod externum, id in casu est.{' '}
        <b>Quibusnam praeteritis?</b> Et nemo nimium beatus est; Quid enim
        possumus hoc agere divinius? At enim iam dicitis virtutem non posse
        constitui, si ea, quae extra virtutem sint, ad beate vivendum
        pertineant. Serpere anguiculos, nare anaticulas, evolare merulas,
        cornibus uti videmus boves, nepas aculeis. Quid enim ab antiquis ex eo
        genere, quod ad disserendum valet, praetermissum est? Non quaeritur
        autem quid naturae tuae consentaneum sit, sed quid disciplinae. Quod cum
        accidisset ut alter alterum necopinato videremus, surrexit statim.{' '}
      </p>
      <p>
        Non laboro, inquit, de nomine. Fortemne possumus dicere eundem illum
        Torquatum? <i>Illud non continuo, ut aeque incontentae.</i> Res enim
        fortasse verae, certe graves, non ita tractantur, ut debent, sed
        aliquanto minutius. Nec vero audiendus Hieronymus, cui summum bonum est
        idem, quod vos interdum vel potius nimium saepe dicitis, nihil dolere.
        Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit.
        Qui autem diffidet perpetuitati bonorum suorum, timeat necesse est, ne
        aliquando amissis illis sit miser. Quin etiam ferae, inquit Pacuvius,
        quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore
        mortis horrescunt. Ut scias me intellegere, primum idem esse dico
        voluptatem, quod ille don. Ita fit illa conclusio non solum vera, sed
        ita perspicua, ut dialectici ne rationem quidem reddi putent oportere:
        si illud, hoc; Aliam vero vim voluptatis esse, aliam nihil dolendi, nisi
        valde pertinax fueris, concedas necesse est. Mihi, inquam, qui te id
        ipsum rogavi? Quae enim cupiditates a natura proficiscuntur, facile
        explentur sine ulla iniuria, quae autem inanes sunt, iis parendum non
        est.{' '}
      </p>
      <p>
        <mark>Contineo me ab exemplis.</mark> <i>Quis enim redargueret?</i> Non
        autem hoc: igitur ne illud quidem. Quo minus animus a se ipse dissidens
        secumque discordans gustare partem ullam liquidae voluptatis et liberae
        potest. <b>Quorum altera prosunt, nocent altera.</b> Diodorus, eius
        auditor, adiungit ad honestatem vacuitatem doloris. In primo enim ortu
        inest teneritas ac mollitia quaedam, ut nec res videre optimas nec agere
        possint. Desideraret enim valitudinem, vacuitatem doloris, appeteret
        etiam conservationem sui earumque rerum custodiam finemque, sibi
        constitueret secundum naturam vivere. Quo plebiscito decreta a senatu
        est consuli quaestio Cn.{' '}
      </p>
      <p>
        Illa tamen simplicia, vestra versuta. Virtutis, magnitudinis animi,
        patientiae, fortitudinis fomentis dolor mitigari solet. Animi enim
        quoque dolores percipiet omnibus partibus maiores quam corporis.{' '}
        <i>Qui est in parvis malis.</i> Quamquam te quidem video minime esse
        deterritum. Sed haec ab Antiocho, familiari nostro, dicuntur multo
        melius et fortius, quam a Stasea dicebantur. Neque enim disputari sine
        reprehensione nec cum iracundia aut pertinacia recte disputari potest.
        Aut etiam, ut vestitum, sic sententiam habeas aliam domesticam, aliam
        forensem, ut in fronte ostentatio sit, intus veritas occultetur? Non
        enim in selectione virtus ponenda erat, ut id ipsum, quod erat bonorum
        ultimum, aliud aliquid adquireret. Quis Aristidem non mortuum diligit?{' '}
      </p>
      <ul>
        <li>
          Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris,
          divitiae, valitudo;
        </li>
        <li>Verba tu fingas et ea dicas, quae non sentias?</li>
        <li>Tum ille timide vel potius verecunde: Facio, inquit.</li>
        <li>Quae quidem sapientes sequuntur duce natura tamquam videntes;</li>
      </ul>
      <blockquote cite="http://loripsum.net">
        Totum genus hoc Zeno et qui ab eo sunt aut non potuerunt aut noluerunt,
        certe reliquerunt.
      </blockquote>
      <ul>
        <li>Ergo, inquit, tibi Q.</li>
        <li>Re mihi non aeque satisfacit, et quidem locis pluribus.</li>
      </ul>
    </div>
  )
};

export default ExampleContainer;
