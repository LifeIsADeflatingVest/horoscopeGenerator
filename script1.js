$(document).ready(function(){
	$("#piscButton").click(function(){
		window.open('https://blog.homeforfiction.com/2019/06/19/blake-pisces-meaning-duality-and-the-human-tragedy/');
	});
	$("#btn").click(function(){
		dmAdd();
	});
	$("#btn2").click(function(){
		makeText();
	});	
	let elem = document.getElementById("btn");
	elem.style.backgroundColor = "crimson";
	elem.innerHTML = "Off";

	function dmAdd() {
		if (elem.innerHTML == "Off") {
			elem.innerHTML = "On";
			elem.style.backgroundColor = "darkgreen";
			makeText();
		}
		else {
			elem.innerHTML = "Off";
			elem.style.backgroundColor = "crimson";
			makeText();
		}
	}

	let d = new Date();
	let m = d.getMonth();
	let allMonths = ["January", "February",
                "March", "April", "May", "June", "July",
                "August", "September", "October", "November",
                "December"];
	let month = allMonths[m];
	
	let x, y;
    function randomIt (z) {
        x = Math.floor(Math.random() * z.length);
        y = Math.floor(x);
        return z[y];
    }
	
    let adj1 = ["an intriguing ", "a special ", "a unique ", "a complicated ", "an unordinary ", "an unusual ", "a crucial ", "a confusing "];
    let nn1 = ["period ", "month ", "time ", "point "];
    let conj1 = ["as a result of ", "because of ", "due to ", "following ", "as a consequence of "];
    let det1 = ["many ", "several ", "a few ", "some ", "a number of "];
    let nn2 = ["events ", "occurrences ", "happenings ", "incidents ", "thoughts ", "happenstances ", "coincidences "];
    let vb1 = ["trouble ", "puzzle ", "confuse ", "upset ", "unsettle ", "bother ", "intimidate "];
    let det2 = ["at first, ", "initially, ", "for a while, ", "for a few days, ", "for some time, ", "for some days, ", "temporarily, ", "momentarily, "];
    let vb2 = ["expect ", "find ", "anticipate ", "be getting ", "await ", "be met by "];
    let adj2 = ["much ", "a welcoming sense of ", "sufficient ", "significant ", "at least some ", "some much needed "];
    let nn3 = ["relief ", "comfort ", "support ", "content ", "happiness "];
    let det3 = ["later on. ", "soon enough. ", "at some point. ", "at a later point. ", "in the second half of the month. ", "before you know it. "];
    let det4 = ["Nonetheless, ", "However, ", "Still, ", "Having said that, ", "But still, ", "Nevertheless, ", "In spite of that, ", "And yet, ", "Although, "];
    let vb3 = ["keep in mind ", "remember ", "acknowledge ", "recognize ", "not forget ", "not ignore "];
    let adj3 = ["rapid ", "unexpected ", "fluid ", "swift ", "turbulent ", "unstable "];
    let nn4 = ["changes ", "shifts ", "developments ", "transitions ", "changes of your situation ", "stirs in your circumstances ", "reversals of events ", "commotions of occurrences ", "turns of events ", "disturbances in your routine "];
    let vb4 = ["cause ", "bring about ", "create ", "produce ", "leave you vulnerable to ", "leave you open to ", "leave you susceptible to ", "bring you ", "cause you ", "induce ", "precipitate ", "engender ", "provoke "];
    let nn5 = ["mood swings. ", "confusion. ", "moodiness. ", "agitation. ", "nervousness. ", "disquiet. ", "alarm. ", "uneasiness. ", "anxiety. ", "worry. ", "stress. "];
    let vb5 = ["brings ", "means ", "allows for ", "facilitates ", "is favorable for ", ("can be a good " + randomIt(nn1) + "for " ), "could be suitable for "];
    let adj4 = ["new ", "fresh ", "innovative ", "intriguing ", "promising ", "inspiring "];
    let nn6 = ["opportunities ", "beginnings ", "endeavors ", "plans ", "options ", "choices ", "alternatives "];
    let det5 = ["related to ", "in regard to ", "concerning ", "having to do with ", "pertaining to ", "regarding "];
    let nn7 = ["business ", "money ", "finances ", "creativity ", "work ", "entrepreneurship ", "the job market ", "your professional life "];
    let nn8 = ["love. ", "romance. ", "friendship. ", " socializing. ", "networking. ", "meeting new people. "];
    let det6 = ["Perhaps ", "Maybe ", "Possibly "];
    let vb6 = ["think about ", "have thoughts about ", "consider ", "ponder on ", "deliberate on ", "try to decide on "];
    let nn9 = ["options. ", "choices. ", "alternatives. ", "course of action. ", "future. ", "next move. "];
    let vb7 = ["become ", "feel ", "be "];
    let det7 = ["too ", "excessively ", "unreasonably ", "overly ", "unduly "];
    let adj5 = ["paralyzed ", "hesitant ", "confused ", "indecisive ", "unsure ", "skeptical ", "reluctant "];
	
	makeText();
	
	function makeText() {
		let dmAdj1 = dmAdj2 = ""; 
		let NN2 = randomIt(nn2);
		let NN5 = randomIt(nn5);
		let JJ5 = randomIt(adj5);
		let NN7 = randomIt(nn7);
		let NN8 = randomIt(nn8);

		if (elem.innerHTML === ("On")) {
			fetchTheWord("https://api.datamuse.com/words?rel_jjb=" + NN2).then(function(obj){
				if (obj !=null && obj.length > 0) {
					dmAdj1 = randomIt(obj).word;
					if (NN5 === ("mood swings. ")){
						NN5 == "confusion. ";
					}		
					NN5 = NN5.replace(/[.,\s]/g, "");		
					fetchTheWord("https://api.datamuse.com/words?rel_jjb=" + NN5).then(function(obj){
						if (obj != null && obj.length > 0) {
							dmAdj2 = randomIt(obj).word;
							NN5 = NN5 + "."
							fetchTheWord("https://api.datamuse.com/words?ml=" + JJ5).then(function(obj){
								if (obj != null && obj.length > 0) {
									JJ5 = randomIt(obj).word + " ";
									if (NN7.startsWith("the" ) || NN7.startsWith("your")) {
										NN7 = "business";
									}
									fetchTheWord("https://api.datamuse.com/words?ml=" + NN7).then(function(obj){
										if (obj != null && obj.length > 0) {
											NN7 = randomIt(obj).word + " ";
											if (NN8.startsWith("meeting") || NN8.startsWith("network")) {
												NN8 = "love. ";
											}
											NN8 = NN8.replace(/[.,\s]/g, "");
											fetchTheWord("https://api.datamuse.com/words?ml=" + NN8).then(function(obj){
												if (obj != null && obj.length > 0) {
													NN8 = randomIt(obj).word + ". ";
													finnishSetUp();
												}
												else {
													NN8 = NN8 + ".";
													finnishSetUp();
												}
											});
										}
										else {
											finnishSetUp();
										}
									});
								}
								else {
									finnishSetUp();
								}
							});
						}
						else {
							finnishSetUp();
							NN5 = NN5 + "."
						}
					});
				}
				else {
					finnishSetUp();
				}
			});
		}
		else {
			finnishSetUp();
		}
		
		function finnishSetUp() {
			let dets = avoidDuplicates();
			let det4a = dets[0];
			let det4b = dets[1];
			let det4c = dets[2];

			let finalText = (month + " can be " + randomIt(adj1) + randomIt(nn1) + "in your life, " + randomIt(conj1) + randomIt(det1) + dmAdj1 + " " + NN2 + "that will " + randomIt(vb1) + "you " + randomIt(det2) + "though you should " + randomIt(vb2) + randomIt(adj2) + randomIt(nn3) + randomIt(det3) + det4a + "you should " + randomIt(vb3) + "that such " + randomIt(adj3) + randomIt(nn4) + "can " + randomIt(vb4) + dmAdj2 + " " + NN5 + "\n\n" + det4b + month + " also " + randomIt(vb5) + randomIt(adj4) + randomIt(nn6) + randomIt(det5) + NN7 + "or " + NN8 + randomIt(det6) + "you will " + randomIt(vb6) + "your " + randomIt(nn9) + det4c + "don\'t " + randomIt(vb7) + randomIt(det7) + JJ5 + "about it!");
			
			$('#horo').text(finalText);
		}
		
		function fetchTheWord(url) {
			return new Promise(function (resolve, reject) {
				resolve($.get(url));
			});
		}
		function avoidDuplicates () {
	    	let a = randomIt(det4);
	    	let b = randomIt(det4);
	    	let c = randomIt(det4);
	    	if ((a == b) || (a == c) || (b == c)) {
		    	return ["Nonetheless, ", "However, ", "Still, "];
			}
			else {
			    return [a, b, c];
			}
		}		
	}
});
