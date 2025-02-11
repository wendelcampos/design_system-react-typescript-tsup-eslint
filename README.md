# Documentação do Sistema de Design

Este sistema de design foi criado para fornecer um conjunto consistente e reutilizável de componentes de UI para aplicações React. Abaixo está uma lista dos componentes incluídos neste sistema, juntamente com suas descrições e exemplos de uso.

## Instalação

Para instalar o sistema de design, execute:

```bash
npm install @sua-org/design-system
```

ou

```bash
yarn add @sua-org/design-system
```

## Uso

Para usar um componente, importe-o para sua aplicação React:

```jsx
import { Button } from '@sua-org/design-system';

function App() {
    return <Button>Clique Aqui</Button>;
}
```

## Componentes

### Texto

O componente `Texto` é usado para renderizar parágrafos ou spans de texto.

**Exemplo:**

```jsx
import { Texto } from '@sua-org/design-system';

<Texto>Este é um componente de texto</Texto>
```

### Título

O componente `Título` é usado para renderizar títulos (h1, h2, h3, etc.).

**Exemplo:**

```jsx
import { Título } from '@sua-org/design-system';

<Título nível={1}>Este é um título</Título>
```

### Caixa

O componente `Caixa` é um contêiner que pode ser usado para aplicar layout e estilização.

**Exemplo:**

```jsx
import { Caixa } from '@sua-org/design-system';

<Caixa padding="médio" backgroundColor="cinza-claro">
    Este é um componente de caixa
</Caixa>
```

### Botão

O componente `Botão` é usado para botões clicáveis.

**Exemplo:**

```jsx
import { Botão } from '@sua-org/design-system';

<Botão onClick={() => alert('Botão clicado!')}>Clique Aqui</Botão>
```

### Entrada de Texto

O componente `Entrada de Texto` é usado para campos de entrada de texto.

**Exemplo:**

```jsx
import { EntradaDeTexto } from '@sua-org/design-system';

<EntradaDeTexto placeholder="Digite o texto aqui" />
```

### Área de Texto

O componente `Área de Texto` é usado para campos de entrada de texto multi-linha.

**Exemplo:**

```jsx
import { ÁreaDeTexto } from '@sua-org/design-system';

<ÁreaDeTexto placeholder="Digite várias linhas de texto aqui" />
```

### Caixa de Seleção

O componente `Caixa de Seleção` é usado para caixas de seleção.

**Exemplo:**

```jsx
import { CaixaDeSeleção } from '@sua-org/design-system';

<CaixaDeSeleção label="Aceitar termos e condições" />
```

### Avatar

O componente `Avatar` é usado para exibir avatares de usuário.

**Exemplo:**

```jsx
import { Avatar } from '@sua-org/design-system';

<Avatar src="caminho-para-imagem.jpg" alt="Avatar do Usuário" />
```

### MultiPasso

O componente `MultiPasso` é usado para formulários ou processos de múltiplas etapas.

**Exemplo:**

```jsx
import { MultiPasso } from '@sua-org/design-system';

<MultiPasso passos={['Passo 1', 'Passo 2', 'Passo 3']} passoAtual={1} />
```

## Contribuindo

Se você deseja contribuir para este sistema de design, por favor, siga as diretrizes no arquivo `CONTRIBUTING.md`.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] CheckBox
- [ ] Avatar
- [ ] MultiStep