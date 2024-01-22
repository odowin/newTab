//clock
$(document).ready(function(){
	setInterval(function(){
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		if (hours > 12){
			var hours = hours - 12;
			var ap = "pm";
		}else if (hours == 12) {
			var ap = "pm";
		}else if (hours == 24) {
			var hours = hours - 12;
			var ap = "am";
		}else {
			var ap = "am";
		}
		document.getElementById('clock').innerHTML = hours + ":" + minutes + ap;
	}, 1000);
});

$(".cont").ready(function(){
	setInterval(function(){
		var height = $(".foreground").height();
		var top = $(".foreground").height();
		var div = $(window).width();
		$(".cont").css("height", height + 30);
		$(".foreground").css("top", -top+15);
		$("#clock").css("margin-top", - top - div/2.3);
		$(".text").css("margin-top", top - 60);
	}, 0.01);
});

//color settings
$(document).ready(function(){
	setInterval(function(){
		var dawn = '#78d';
		var day = '#1bf';
		var dusk = '#036';
		
		var mood = new Date();
		var second = mood.getSeconds();
		if(second < 20){
			$('body').css('background', dawn);
			$('.trees').css('fill', dawn);
			$('.sky-dawn').css('opacity','1');
			$('.sky-day').css('opacity','1');
			$('.hills').css('fill','#c66');
		} else if(second < 40) {
			$('body').css('background', day);
			$('.trees').css('fill', day);
			$('.sky-dawn').css('opacity','0');
			$('.sky-day').css('opacity','1');
			$('.hills').css('fill','#db9');
		} else {
			$('body').css('background', dusk);
			$('.trees').css('fill', dusk);
			$('.sky-day').css('opacity','0');
			$('.hills').css('fill','#0be');
		}
	});
});

// Phrases positives
        var positivePhrases = [
            "La vie est belle! ~ Pourtoa",
            "Chaque jour est une nouvelle opportunité. ~ Pourtoa",
            "Vous êtes capable de grandes choses. ~ Pourtoa",
            "Soyez le changement que vous voulez voir dans le monde. ~ Pourtoa",
            "Le succès est un voyage, pas une destination. ~ Pourtoa",
            "Rien n'est impossible, la volonté crée le chemin. ~ Pourtoa" ,
            "Je suis entouré d‘amour, tout est bien. ~ Anonyme",
            "Je me réjouis de l’amour que je reçois et que je donne. ~ Anonyme",
            "C’est l’amour qui anime ma vie et qui la rend merveilleuse. ~ Anonyme",
            "Aimez la vie que vous avez pour vivre la vie que vous aimez. ~ Huseein Nishah",
            "Aimez-vous. Il est important de rester positif, car la beauté vient de l’intérieur. ~ Jenn Proske",
            "J’apprécie toutes les personnes dans ma vie et je les aime de tout mon cœur. ~ Anonyme",
            "Lorsque nous sommes prêts à aimer vraiment, notre vie s’épanouit de façon merveilleuse. ~ Anonyme",
            "La formule sacrée du positivisme : l’amour pour principe, l’ordre pour base, et le progrès pour but. ~ Auguste Comte",
            "L‘amour m‘accueille partout où je vais, je n‘attire que les relations équilibrées, je suis toujours bien traité. ~ Anonyme",
            "Je ne sais pas ce que l‘avenir me réserve, mais je sais que je vais être positif et ne pas me réveiller désespéré. ~ Nicole Kidman",
            "Je vis une belle relation intime avec quelqu‘un qui m‘aime profondément. Je suis magnifique et tout le monde m‘aime. ~ Anonyme",
            "En élargissant ma manière de penser, je dépasse mes limites. ~ Anonyme",
            "J’ai le pouvoir de me transformer et de progresser vers un mieux-être. ~ Anonyme",
            "Gardez votre visage vers le soleil et vous ne pourrez pas voir une seule ombre. Helen Keller",
            "Je suis une bonne personne et m’améliore à chaque instant. Tout va bien et tout ira encore mieux. ~ Anonyme",
            "Je mérite l’amour et le bonheur. ~ Anonyme",
            "Le bonheur, comme le malheur, est un choix proactif. ~ Stephen Covey",
            "Tout va bien dans mon univers. Je suis calme, heureux et content. ~ Anonyme",
            "Je peux exploiter ma source de bonheur intérieur chaque fois que je le souhaite. ~ Anonyme",
            "Mon amour pour les autres nourrit mon cheminement vers un plus grand bonheur. ~ Anonyme",
            "Je me réveille chaque matin en me sentant heureux et enthousiaste à l’égard de ma vie. ~ Anonyme",
            "Je suis heureux d’avoir encore aujourd’hui l’opportunité de vivre, de ressentir et d’apprécier la vie. ~ Anonyme",
            "Le bonheur est mon droit imprescriptible. J’accepte que le bonheur devienne le cœur de mon existence. ~ Anonyme",
            "Le bonheur n’est pas quelque chose que vous retardez pour l’avenir. C’est quelque chose que vous concevez pour le présent. ~ Jim Rohn",
            "Être positif, c’est voir la vie du bon côté et savoir apprécier les choses simples de la vie ; le bonheur en famille, la beauté de la nature, les personnes que l’on aime et celles qui nous aiment, un bon moment partagé en famille ou avec l’amour de notre vie. ~ Anonyme",
            "Mes pensées positives déterminent ma vie. ~ Anonyme",
            "Il faut voir la vie du bon côté, c’est une façon formidable de vivre. ~ Anonyme",
            "Aujourd’hui, je réussis. Demain, je réussirai. Chaque jour, je réussis. ~ Anonyme",
            "Positiver, c’est augmenter le baromètre de votre moral vers le beau temps. ~ Jean Gastaldi",
            "C’est merveilleux d’être optimiste. Il vous garde en bonne santé et résilient. ~ Daniel Kahneman",
            "Une attitude positive peut transformer les rêves en réalité. Il l’a fait pour moi. ~ David Bailey",
            "Vous ne pouvez pas fréquenter des gens négatifs et vous attendre à vivre une vie positive. ~ Joel Osteen",
            "Carburez-vous avec du positif et de laisser ce carburant vous propulser vers une action positive. ~ Steve Maraboli",
            "Un état d’esprit positif t’aide non seulement à imaginer ce que tu veux être, mais t’aide aussi à le devenir. ~ Amos Wally",
            "L’idée derrière les affirmations et la pensée positive, c’est que ce que l’on pense, mais surtout ce à quoi on croit influence notre vie. ~ Anonyme",
            "En adoptant une attitude mentale positive, nous parvenons à conserver notre paix intérieure, y compris dans des circonstances hostiles. ~ Anonyme",
            "Des pensées positives n’augmentent pas uniquement le bien-être général de ton organisme, mais encore déclenchent des vibrations de sympathie et d’amour autour de toi et qui vont en s’amplifiant. ~ K.O. Schmidt",
            "Peu importe combien de temps vous passez sur la terre, combien d’argent vous avez recueilli ou combien d’attention vous avez reçu. C’est la quantité de vibration positive que vous avez rayonnée dans la vie qui compte. ~ Amit Ray (Méditation: Idées et Inspirations)",
            "De mauvaises choses vont arriver, mais de meilleures choses arriveront aussi. Si vous avez tendance à voir plus de choses négatives que positives, alors vous devez travailler sur le muscle du positivisme dans votre cerveau. ~ Scott Hamilton",
            "Entraînez votre esprit à se concentrer uniquement sur des pensées positives, créatives et inspirantes. Si vous entraînez votre esprit comme ça pendant un certain temps, vous verrez que les circonstances de votre vie changeront aussi. ~ Marc Reklau",
            "Lorsque des millions de gens adoptent simultanément des attitudes positives, lorsque chacun élève son niveau de conscience, la Terre fait un pas énorme vers la voie de la guérison. ~ Eric d’Antimo",
            "En regardant plutôt le verre à moitié plein, vous cultivez la gratitude pour ce que vous avez déjà, créant ainsi un effet vertueux qui va certainement se transformer en espoirs et opportunités. ~ Anonyme",
            "Garde tes pensées positives, car tes pensées deviennent tes mots. Garde tes mots positifs, car tes mots deviennent ton comportement. Garde ton comportement positif, parce que ton comportement devient tes habitudes. Garde tes habitudes positives, car tes habitudes deviennent tes valeurs. Garde tes valeurs positives, car tes valeurs deviennent ta destinée. ~ Anonyme",
            "Je reconnais mes talents et réalisations. ~ Anonyme",
            "Je fais des choix positifs, qui me nourrissent de l’intérieur. ~ Anonyme",
            "Je me félicite pour les grandes et petites choses que je réalise. ~ Anonyme",
            "Je suis plus brave que je ne le crois et plus doué que je ne le pense. ~ Anonyme",
            "Nous sommes tous des êtres merveilleux dotés d’un potentiel immense. ~ Anonyme",
            "La grandeur s’obtient uniquement par l’entretien constant de grandes pensées. ~ Wallace Wattles",
            "Je suis une belle personne de l’intérieur jusqu’à l’extérieur. Et je mérite d’être aimé. ~ Anonyme",
            "Nous pouvons changer nos vies. Nous pouvons faire, avoir et être exactement ce que nous voulons. ~ Tony Robbins",
            "L’inspiration vient de votre intérieur. Il faut être positif. Quand vous l’êtes, de bonnes choses arrivent. ~ Deep Roy",
            "Les gens qui réussissent maintiennent un accent positif sur la vie, peu importe ce qui se passe autour d’eux. ~ Jack Canfield",
            "Apprenez à sourire dans chaque situation et à les voir comme des occasions de tester votre force et vos compétences. ~ Joe Brown",
            "Je me regarde volontiers dans le miroir pour dire je t‘aime, je t‘aime vraiment fort, je mérite désormais l‘amour, la joie et toutes les bonnes choses que la vie me réserve. ~ Anonyme",
            "La pensée positive est plus qu’un slogan. Cela change notre comportement. Je crois fermement que lorsque je suis positif, je vais mieux et que je me comporte mieux avec les autres. ~ Harvey Mackay",
            "Mon cœur est un lieu de paix et de bonté. ~ Anonyme",
            "Je choisis les pensées qui me réconcilient avec la paix et l’harmonie. ~ Anonyme",
            "Je suis en paix, car je sais que la vie est toujours là pour me soutenir, m’aider et me réconforter. ~ Anonyme",
            "Je concentre mon attention sur les belles choses de la vie. ~ Anonyme",
            "Lorsqu‘il pleut, cherche l‘arc-en-ciel, lorsqu‘il fait noir, cherche les étoiles. ~ Anonyme",
            "De bonnes choses arrivent quotidiennement. Il suffit de vouloir les remarquer. ~ Anonyme",
            "Un mental positif produit des sentiments positifs et attire des événements positifs. ~ Anonyme",
            "Si vous remplissez votre esprit de pensées positives, vous pouvez supporter n’importe quelle situation. ~ Lailah Gifty Akita",
            "Lorsque vous remplacerez les pensées négatives par des pensées positives, vous commencerez à avoir des résultats positifs. ~ Willie Nelson",
            "Chaque jour est un nouveau départ. ~ Anonyme",
            "Chaque jour, j’ai de plus en plus de succès. ~ Anonyme",
            "Chaque jour apporte de nouvelles opportunités. ~ Martha Beck",
            "Cette journée est un merveilleux cadeau que la vie me fait. ~ Anonyme",
            "Chaque jour et à tous points de vue, je vais de mieux en mieux. ~ Émile Coué",
            "Chaque jour ne peux être bon, mais il y a du bon dans chaque jour. ~ Anonyme",
            "Écrivez-le sur votre cœur que chaque jour est le plus beau jour de l’année. ~ Ralph Waldo Emerson",
            "Un petit changement positif peut changer votre journée entière ou toute votre vie. ~ Nishant Grover",
            "Les personnes qui réussissent adoptent au quotidien des habitudes positives, qui les aident à grandir et à apprendre. ~ John Maxwell",
            "Chaque jour m’apporte de nouveaux éléments qui enrichissent mon expérience de la vie et ainsi, je chemine vers une meilleure façon de vivre. ~ Anonyme",
            "Si aujourd’hui est bien vécu, chaque hier se transformera en heureux souvenir et chaque demain se transformera en une vision remplie d’espoir. ~ Anonyme",
            "Chaque jour qui commence est une page vierge. Une étendue de temps qui n’a pas encore été vécue. On peut y écrire ce que l’on veut. Il n’appartient qu’à soi de décider de réussir cette journée, malgré ses contraintes et ses obligations. ~ Catherine Rambert (Petite philosophie du matin, 2007)",
            "Tout ce dont j’ai besoin pour cheminer est à portée de mes mains. ~ Anonyme",
            "Lorsque nous sommes prêts à évoluer, la vie soutient notre cheminement. ~ Anonyme",
            "Je ne suis peut-être pas arrivé là où j’essayais d’y aller, mais je pense avoir fini où je devais être. ~ Douglas Adams",
            "Tout est soit une opportunité de croissance, soit un obstacle qui vous empêche de grandir. Vous pouvez décider. ~ Wayne Dyer",
            "Je donne à la vie avec joie et la vie me donne davantage en retour. ~ Anonyme",
            "Je suis reconnaissant pour toutes les choses que la vie m’a offertes. ~ Anonyme",
            "Tu as deux choix dans la vie : Vivre dans le positif ou vivre dans le négatif. Tous les choix découlent de ces contrastes. ~ Sophia",
            "Il faut savoir prendre la vie avec le sourire. Au cours d’une vie, on connaît plus de jours merveilleux que de coups durs. ~ Henri Salvador",
            "La plénitude de la vie est dans tout. Quand vous reconnaissez l’abondance qui est autour de vous, l’abondance latente en vous s’éveille. ~ Eckhart Tolle",
            "Une disposition ensoleillée vaut plus qu‘une fortune. ~ Andrew Carnegie",
            "Je suis optimiste. Cela n’a pas beaucoup de sens d’être autre chose. ~ www.evolution-101.com",
            "Fais confiance aux rêves, car en eux la porte de l’éternité est cachée. ~ Khalil Gibran",
            "Il ne s’agit pas de la situation, mais si nous réagissons négativement ou positivement à la situation. ~ Zig Ziglar",
            "Chaque jour a 1440 minutes. Cela signifie que nous avons chaque jour 1 440 occasions d’avoir un impact positif. ~ Les Brown"
        ];

        // Fonction pour générer une phrase positive aléatoire
        function generatePositivePhrase() {
            var randomIndex = Math.floor(Math.random() * positivePhrases.length);
            var randomPhrase = positivePhrases[randomIndex];
            document.getElementById("positive-phrase").textContent = randomPhrase;
        };