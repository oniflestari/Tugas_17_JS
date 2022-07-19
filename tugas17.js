var kalimat1 = 'Saya beLajar bahaSa peMrograman deNgan khUsuk.';
var kalimat2 = 'Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.';
console.log(kalimat1.toLowerCase());
console.log(kalimat1.toUpperCase());
console.log(kalimat2.toLowerCase());
console.log(kalimat2.toUpperCase());

var kalimat3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var ascii = [kalimat3.charCodeAt(0), kalimat3.charCodeAt(1), kalimat3.charCodeAt(2), kalimat3.charCodeAt(3), kalimat3.charCodeAt(4), kalimat3.charCodeAt(5)]
console.log(ascii.join('-'))