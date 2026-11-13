<img width="4005" height="3004" alt="Mockuuups Free Isometric iPhone Air Mockup" src="https://github.com/user-attachments/assets/e7d12ab3-7609-4775-80d8-ec40a1a07f3f" />
# SmartHome — Aplicativo mobile

Projeto React + Vite + Capacitor criado para a atividade de Identidade Visual Nativa.

## Identidade visual
- Roxo, violeta e azul-noite
- Ícone nativo: `assets/icon.png` (1024 × 1024)
- Splash screen: `assets/splash.png` (2732 × 2732)
- Logotipo com casa conectada e sinal Wi-Fi

## Preparação (na raiz do projeto)
```bash
npm install
npx capacitor-assets generate --android
npm run build
npx cap add android
npx cap sync android
```

Se a pasta `android/` já existir, não execute `npx cap add android` novamente.

## Executar no Android
```bash
npx cap open android
```
Conecte um dispositivo Android com depuração USB autorizada e execute pelo Android Studio.

## GitHub Actions
O workflow `.github/workflows/android-build.yml` compila o APK Debug a cada push em `main` ou `master`. O arquivo fica em Actions → execução concluída → Artifacts → `meu-aplicativo-apk`.
