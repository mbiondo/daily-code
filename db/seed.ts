
import { User, Exercise, MultilingualText, ExerciseResponse, UserExerciseResult, Region, UserRegion, RegionalRanking, db } from 'astro:db';



export default async function seed() {
  await db.insert(User).values([
    {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      provider: 'local',
      createdAt: new Date(),
      avatar: 'https://cdn.example.com/avatars/admin.png'
    },
    {
      id: 2,
      username: 'user1',
      email: 'user1@example.com',
      provider: 'local',
      createdAt: new Date(),
      avatar: 'https://cdn.example.com/avatars/user1.png'
    },
    {
      id: 3,
      username: 'user2',
      email: 'user2@example.com',
      provider: 'github',
      createdAt: new Date(),
      avatar: 'https://cdn.example.com/avatars/user2.png'
    },
    {
      id: 4,
      username: 'user3',
      email: 'user3@example.com',
      provider: 'google',
      createdAt: new Date(),
      avatar: 'https://cdn.example.com/avatars/user3.png'
    },
    {
      id: 5,
      username: 'user4',
      email: 'user4@example.com',
      provider: 'local',
      createdAt: new Date(),
      avatar: 'https://cdn.example.com/avatars/user4.png'
    }
  ]);

 
  await db.insert(Exercise).values([
		 {
			id: 1,
			code: `\`\`\`ts
class Car {
	private engine: string;
	private color: string;
	private seats: number;

	constructor() {
		this.engine = '';
		this.color = '';
		this.seats = 4;
	}

	public setEngine(engine: string): this {
		this.engine = engine;
		return this;
	}

	public setColor(color: string): this {
		this.color = color;
		return this;
	}

	public setSeats(seats: number): this {
		if (seats < 2 || seats > 8) {
			throw new Error('Seats must be between 2 and 8');
		}
		this.seats = seats;
		return this;
	}

	public build(): Car {
		return this;
	}

	public getDescription(): string {
		return \`Car with \${this.engine} engine, \${this.color} color, and \${this.seats} seats.\`;
	}
}

// Usage
const car1 = new Car()
	.setEngine('V8')
	.setColor('Red')
	.setSeats(5)
	.build();

console.log(car1.getDescription());

const car2 = new Car()
	.setEngine('Electric')
	.setColor('Blue')
	.build();\`\`\``,
			difficulty: 2,
			createdAt: new Date(),
		}
  ]);

  await db.insert(ExerciseResponse).values([
		{
			id: 1,
			exerciseId: 1,
			isCorrect: true,
		},
		{
			id: 2,
			exerciseId: 1,
			isCorrect: true,
		},
		{
			id: 3,
			exerciseId: 1,
			isCorrect: false,
		},
		{
			id: 4,
			exerciseId: 1,
			isCorrect: false,
		},
  ]);

  await db.insert(UserExerciseResult).values([
    {
      id: 1,
      userId: 1,
      exerciseId: 1,
      score: 100,
      completionTime: '00:01:30',
    },
  ]);
	
  await db.insert(MultilingualText).values([
		{
			id: 1,
			referenceId: 1,
			language: 'en',
			text: "What is wrong with the following implementation of the Builder pattern?",
			exerciseId: 1,
			responseId: null,
		},
		{
			id: 2,
			referenceId: 1,
			language: 'es',
			text: "¿Qué está mal en la siguiente implementación del patrón Builder?",
			exerciseId: 1,
			responseId: null,
		},
		{
			id: 3,
			referenceId: 1,
			language: 'fr',
			text: "Qu'est-ce qui ne va pas avec l'implémentation suivante du modèle Builder?",
			exerciseId: 1,
			responseId: null,
		},
		{
			id: 4,
			referenceId: 1,
			language: 'pt',
			text: "O que há de errado com a seguinte implementação do padrão Builder?",
			exerciseId: 1,
			responseId: null,
		},
		{
			id: 5,
			referenceId: 1,
			language: 'it',
			text: "Cosa c'è di sbagliato nella seguente implementazione del pattern Builder?",
			exerciseId: 1,
			responseId: null,
		},
		{
			id: 6,
			referenceId: 1,
			language: 'en',
			text: "The `build` method returns `this`, but it should return a new instance to adhere to the Builder pattern.",
			exerciseId: null,
			responseId: 1,
		},
		{
			id: 7,
			referenceId: 1,
			language: 'es',
			text: "El método `build` devuelve `this`, pero debería devolver una nueva instancia para adherirse al patrón Builder.",
			exerciseId: null,
			responseId: 1,
		},
		{
			id: 8,
			referenceId: 1,
			language: 'fr',
			text: "La méthode `build` retourne `this`, mais elle devrait retourner une nouvelle instance pour respecter le modèle Builder.",
			exerciseId: null,
			responseId: 1,
		},
		{
			id: 9,
			referenceId: 1,
			language: 'pt',
			text: "O método `build` retorna `this`, mas deveria retornar uma nova instância para aderir ao padrão Builder.",
			exerciseId: null,
			responseId: 1,
		},
		{
			id: 10,
			referenceId: 1,
			language: 'it',
			text: "Il metodo `build` restituisce `this`, ma dovrebbe restituire una nuova istanza per aderire al pattern Builder.",
			exerciseId: null,
			responseId: 1,
		},
		{
			id: 11,
			referenceId: 1,
			language: 'pt',
			text: "O objeto pode ser construído sem todos os campos obrigatórios, como `engine` ou `color`, que deveriam ser obrigatórios.",
			exerciseId: null,
			responseId: 2,
		},
		{
			id: 12,
			referenceId: 1,
			language: 'it',
			text: "L'oggetto può essere costruito senza tutti i campi obbligatori, come `engine` o `color`, che dovrebbero essere obbligatori.",
			exerciseId: null,
			responseId: 2,
		},
		{
			id: 13,
			referenceId: 1,
			language: 'en',
			text: "The object can be built without all the required fields, like `engine` or `color`, which should be mandatory.",
			exerciseId: null,
			responseId: 2,
		},
		{
			id: 14,
			referenceId: 1,
			language: 'es',
			text: "El objeto puede construirse sin todos los campos obligatorios, como `engine` o `color`, que deberían ser obligatorios.",
			exerciseId: null,
			responseId: 2,
		},
		{
			id: 15,
			referenceId: 1,
			language: 'fr',
			text: "L'objet peut être construit sans tous les champs obligatoires, comme `engine` ou `color`, qui devraient être obligatoires.",
			exerciseId: null,
			responseId: 2,
		},
		{
			id: 16,
			referenceId: 1,
			language: 'pt',
			text: "O método `build` deve ser estático para evitar várias instâncias.",
			exerciseId: null,
			responseId: 3,
		},
		{
			id: 17,
			referenceId: 1,
			language: 'it',
			text: "Il metodo `build` dovrebbe essere statico per evitare più istanze.",
			exerciseId: null,
			responseId: 3,
		},
		{
			id: 18,
			referenceId: 1,
			language: 'en',
			text: "The `setSeats` method should allow an unlimited number of seats.",
			exerciseId: null,
			responseId: 4,
		},
		{
			id: 19,
			referenceId: 1,
			language: 'es',
			text: "El método `setSeats` debería permitir un número ilimitado de asientos.",
			exerciseId: null,
			responseId: 4,
		},
		{
			id: 20,
			referenceId: 1,
			language: 'fr',
			text: "La méthode `setSeats` devrait permettre un nombre illimité de sièges.",
			exerciseId: null,
			responseId: 4,
		},
		{
			id: 21,
			referenceId: 1,
			language: 'pt',
			text: "O método `setSeats` deve permitir um número ilimitado de assentos.",
			exerciseId: null,
			responseId: 4,
		},
		{
			id: 22,
			referenceId: 1,
			language: 'it',
			text: "Il metodo `setSeats` dovrebbe consentire un numero illimitato di posti.",
			exerciseId: null,
			responseId: 4,
		},
  ]);

  
  await db.insert(Region).values([
    {
      id: 1,
      name: 'North America'
    },
    {
      id: 2,
      name: 'Europe'
    },
    {
      id: 3,
      name: 'Asia'
    },
    {
      id: 4,
      name: 'South America'
    }
  ]);


  await db.insert(UserRegion).values([
    {
      userId: 1,
      regionId: 1
    },
    {
      userId: 2,
      regionId: 2
    },
    {
      userId: 3,
      regionId: 3
    },
    {
      userId: 4,
      regionId: 4
    },
    {
      userId: 5,
      regionId: 1
    }
  ]);

 
  await db.insert(RegionalRanking).values([
    {
      id: 1,
      regionId: 1,
      userId: 1,
      totalScore: 450,
      rank: 1
    },
    {
      id: 2,
      regionId: 2,
      userId: 2,
      totalScore: 300,
      rank: 1
    },
    {
      id: 3,
      regionId: 3,
      userId: 3,
      totalScore: 250,
      rank: 1
    },
    {
      id: 4,
      regionId: 4,
      userId: 4,
      totalScore: 200,
      rank: 1
    },
    {
      id: 5,
      regionId: 1,
      userId: 5,
      totalScore: 350,
      rank: 2
    }
  ]);

  console.log('Database seeded successfully');
}
