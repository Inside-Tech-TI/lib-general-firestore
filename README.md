# general-firestore

### General firestore é responsável por fazer o acesso ao Firestore.

É possível usar o projeto como submodule ou cloud function, estamos importando o projeto em alguma cloud function que tenha a necessidade em acessar os dados no Firestore.

> Methods existentes

- [x] POST
- [x] GET - get pelo id do documento, get com filter, pagination
- [ ] PUT
- [ ] DELETE - parcial

Quando você importar o general-firestore como um submodule utilize os methods get e insert que estão dentro da classe GeneralFirestore no arquivo index.ts para recuperar ou inserir dados.

- get()
- insert()

### Lembre-se - Importante

- Todas as consultas precisam da COLLECTION principal.

- Select - Se o select não for informado será retornado tudo que existe no/nos document

- Offset - Se o offset não for informado será utilizado um offset default

```
offset = {
  skip: 0,
  limit: 30,
}
```

### Select

Se o select não for informado será retornado tudo que existe no/nos document. Quando informado é possível retornar os valores do document

### Offset

Se o offset não for informado será utilizado um offset default. O Offset utiliza dois valores informados pelo dev, skip para "pular" itens e o "limit" que é o campo onde limita a QUANTIDADE de valores retornados, ou seja se eu informar um limit = 0 ou limit = 1 o máximo de documents retornados será 1.

# Exemplo das chamadas

- collection: required
- filter: optional
- select: optional
- offset: optional

### Pesquisa entre objetos

Quando você precisa navegar entre objetos utilize da seguinte forma:

- GET / Request Body

```
{
    "collection": "atento-users-test",
    "filter": {
        "auth.credentials.login": "login"

    }
}
```

### $gt (>)

Quando você informar o $gt no filter o valor informado será filtrado como maior que (>).

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "idade": {
            "$gt": 17
        }
    },
    "select": {
        "name": true
    },
    "offset": {
        "skip": 0,
        "limit": 0
    }
}
```

### $lt (<)

Quando você informar o $lt no filter o valor informado será filtrado como menor que (<).

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "idade": {
            "$lt": 17
        }
    },
    "select": {
        "name": true
    },
    "offset": {
        "skip": 0,
        "limit": 0
    }
}
```

### $gte (>=)

Quando você informar o $gte no filter o valor informado será filtrado como maior ou igual que (>=).

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "idade": {
            "$gte": 17
        }
    },
    "select": {
        "name": true,
        "idade": true
    },
    "offset": {
        "skip": 0,
        "limit": 0
    }
}
```

### $lte (<=)

Quando você informar o $lte no filter o valor informado será filtrado como menor ou igual que (<=).

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "peso": {
            "$gte": 88.88
        }
    },
    "select": {
        "peso": true,
        "idade": true,
        "estado": true
    },
    "offset": {
        "skip": 0,
        "limit": 0
    }
}
```

### $not (!=)

Quando você informar o $not no filter o valor informado será filtrado como não igual / diferente de (!=).

- GET / Request Body

```
{
    "collection": "admin",
    "filter": {
        "email": {
            "$not": "zame@teste.com"
        }
    }
}
```

### $elemMatch (array-contains)

Quando você tem um campo no document e esse campo é um array use o elemMatch para filtrar informando um valor unico para comparar. Lembrando que vai retornar se houver varios documents que contenham o valor informado no campo (array).

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "perfis": {
            "$elemMatch": "admin"
        }
    }
}
```

### $in (in)

O in é usado quando você tem um campo comum (não array) no seu document, passando um array como valor para o filter retornará todos os documents encontrados que apresentam aquele campo encontrado.

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "idade": [18, 17]

    },
    "select": {
        "name": true,
        "perfis": true

    }
}

Exemplo do retorno: Buscamos todos dos documents em que a idade seja 18 ou 17 anos.

- Retorno JSON
[
    {
        "id": "YYdBeXF2DEeWbquH9wFk",
        "perfis": [
            "admin",
            "comum"
        ],
        "name": "Youtube"
    },
    {
        "id": "nI0t1glYEEJtHJt5X3BO",
        "perfis": [
            "admin",
            "comum"
        ],
        "name": "Zame"
    }
]
```

### $nin (not-in)

O nin é a inverso do in, retornará os documents onde o valor ou valores informados é diferente do array do filter

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "idade": {
            "$nin": [18]
        }

    },
    "select": {
        "name": true,
        "perfis": true,
        "idade": true
    }
}

- Retorno JSON
[
    {
        "id": "nI0t1glYEEJtHJt5X3BO",
        "perfis": [
            "admin",
            "comum"
        ],
        "idade": 17,
        "name": "Zame"
    }
]
```

### $all (array-contains-any)

Para utilizar o all informe um array no filter, retornará todos os documents com o valor informado presente.

- GET / Request Body

```
{
    "collection": "users",
    "filter": {
        "perfis": {
            "$all": ["comum"]
        }
    }

}

- Retorno JSON
[
    {
        "id": "2KEEKkD80lCzuUPkH5tz",
        "perfis": [
            "admin",
            "comum"
        ],
        "name": "Praia",
        "body": {
            "head": "cabeça",
            "armis": {
                "left": "esquerda",
                "right": "direita"
            }
        }
    },
    {
        "id": "LIwbuzicmSMc5QlKnpe2",
        "perfis": [
            "admin",
            "comum"
        ],
        "name": "Google",
        "body": {
            "head": "cabeça",
            "armis": {
                "left": "esquerda",
                "right": "direita"
            }
        }
    },
]
```
