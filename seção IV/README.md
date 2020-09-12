# Teoria sobre os principais conceitos da orientação a objetos

Objetos (objects)
- A representação de uma classe;
- Fundamental para a Orientação a Objetos;
- Tem propriedades que representam as características de um objeto;
- Tem métodos que representam as ações de um objeto;

Classes (class)
- É como se fosse o molde do objeto;
- Geralmente se cria diversos objetos da mesma classe;
- Normalmente já possui as propriedades e métodos que os objetos vão utilizar;
- A classe no JS foi introduzida na versão ES6 da linguagem;

Encapsulação (encapsulation)
- Quando um objeto contém, ou encapsula, dados ou meios de fazer algo com os dados (usando métodos);
- Um outro aspecto da encapsulação é ter propriedades e métodos públicos, privados ou protegidos;
- No JS não temos estes meios de forma nativa, tudo é público;

Agregação (agregation)
- Também conhecido como Composição;
- Ato de combinar diversos objetos em um maior;
- Isso serve para não termos um objeto muito grande e complexo;
- Objeto grande = SalaDeAula;
- Objeto com agregação = SalaDeAula com Aluno, Cadeira, Lousa e etc.
- Sala de aula foi dividida em diversos objetos, e cada um tem sua responsabilidade;

Herança (inheritance)
- Quando um objeto ou classe deriva de uma outra classe;
- Podendo herdar suas propriedades e métodos;
- Fazendo com que crie classes com o comportamento semelhante, porém para fins distintos;

Polimorfismo (polymorfism)
- É a possibilidade de utilizar um método de uma classe pai de uma maneira diferente;
- Que se adapte as necessidades do novo objeto, sem precisar alterar o método do objeto pai;
- Importante citar que o polimorfismo utiliza o conceito de herança.