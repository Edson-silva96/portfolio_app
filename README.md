# portfolio_app
projeto "Portfólio App" feito com **React Native**, **Expo** e **TypeScript**:

---

# 📱 Portfólio App

Aplicativo desenvolvido com **React Native**, **Expo** e **TypeScript** para apresentar meu portfólio, habilidades e links profissionais de forma interativa.

---
![foto1](https://github.com/user-attachments/assets/73c8601d-0f7d-42d5-b276-b938dc60aa67)

## 🖼️ Foto 1 – Tela "Minhas Habilidades"

Esta tela exibe minhas habilidades técnicas com ícones de estrelas representando o nível de proficiência.
Cada habilidade é listada com seu respectivo nome e uma avaliação visual.

**Funcionalidades:**

* Lista de habilidades com nome e estrelas (de 1 a 5).
* Foto de perfil no topo.
* Layout limpo e responsivo.

**Código relacionado:** `SkillsScreen.tsx`
Trecho chave:

```tsx
{skills.map((skill, index) => (
  <View key={index} style={styles.skillContainer}>
    <Text style={styles.skillText}>{skill.name}</Text>
    <View style={styles.stars}>
      {[...Array(5)].map((_, i) => (
        <FontAwesome
          key={i}
          name="star"
          size={20}
          color={i < skill.stars ? '#FFD700' : '#ccc'}
        />
      ))}
    </View>
  </View>
))}
```

---
![foto2](https://github.com/user-attachments/assets/88af7ee0-9e8e-4e5c-a03f-0da84dfd6af7)


## 🖼️ Foto 2 – Tela "Meu Portfólio"

A tela inicial apresenta:

* Foto e nome.
* Botões para **LinkedIn**, **GitHub**, **E-mail** e **Ver Habilidades**.

**Funcionalidades:**

* Botões que abrem links externos (LinkedIn, GitHub e e-mail).
* Botão "Ver Habilidades" que navega para a tela de skills.

**Código relacionado:** `HomeScreen.tsx`
Trecho chave:

```tsx
<TouchableOpacity style={styles.skillsButton} onPress={() => navigation.navigate('Skills')}>
  <Text style={styles.buttonText}>Ver Habilidades</Text>
</TouchableOpacity>
```

---

![foto3](https://github.com/user-attachments/assets/a3a86c75-835c-460e-9598-bf8cc904393a)


## 🖼️ Foto 3 – Perfil no GitHub

Integração do app com meu perfil no GitHub, permitindo que visitantes acessem meus repositórios diretamente pelo botão na tela inicial.

**Funcionalidade:**

* Ao clicar no botão "GitHub" na tela inicial, o aplicativo abre meu perfil no navegador usando:

```tsx
Linking.openURL('https://github.com/seu-usuario')
```

---

![foto4](https://github.com/user-attachments/assets/9362e1bb-23b6-446d-be43-4b4288fb8cbf)


## 🖼️ Foto 4 – Perfil no LinkedIn

Integração do app com meu perfil no LinkedIn para facilitar conexões profissionais.

**Funcionalidade:**

* Ao clicar no botão "LinkedIn", o app abre o perfil no navegador:

```tsx
Linking.openURL('https://www.linkedin.com/in/seu-link')
```

---

## 📂 Estrutura do Projeto

```
/App.tsx
/screens
   ├── HomeScreen.tsx
   └── SkillsScreen.tsx
/assets
   └── minha-foto.jpg
```

---

## 🚀 Tecnologias Utilizadas

* **React Native**
* **Expo**
* **TypeScript**
* **@react-navigation/native**
* **@react-navigation/native-stack**
* **@expo/vector-icons**

---

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/portfolio-app.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o app:

```bash
npx expo start
```

---

Se quiser, posso já montar esse README com **screenshots das fotos 1 a 4 incluídas** para ficar mais visual e profissional. Isso deixaria pronto para você subir no GitHub. Quer que eu faça?
