import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * Opção para fazer conexão do emulador com localhost da máquina
 * iOS com Emulador: localhost
 * iOs com físico: IP da máquina
 * Android com Emulador: adb reverse tcp:3333 tcp:3333
 *  - adb reverse faz um redirecionamento de portas para dentro do emulador do android
 *    o emulador do android é uma máquina virtual a parte e não exerga o computador como
 *    localhost, diferente do iOS que o proprio sistema é o localhost
 * Android com Emulador: IP Especifico 10.0.2.2 (Android Studio)
 * Android com Emulador: IP Especifico 10.0.3.2 (Genymotion)
 * Android com Físico: IP da máquina.
 */
