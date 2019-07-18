# changeprofilevk
Program user.js interface, that allows you change user profiles in VK.

Использование:
Сначала установите расширение Tampermonkey(https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru).
Затем перейдите на сайт https://openuserjs.org/scripts/Egoluback/Change_VK_profile и нажмите на кнопку Install.
Далее нажмите "Установить".

После этого, скрипт уже будет работать, но со своими настройками. Чтобы отредактировать его поведение, вам необходимо перейти к исходному коду(нажать на расширение tampermonkey -> Панель управления -> Change VK profile).

Для использования скрипта вам необходимы лишь последние строчки кода, а именно 86+ строки.
Для указания первой фразы(в примере - "Родная планета") вам нужно заменить переменную из 89 строки на ту, что вам нужна. Затем в строке 93 исправьте isArr на false.
Если вы хотите, чтобы вторая фраза содержала одно(не случайное) значение, вам не нужен массив. В строке 90 вместо "planets" введите нужное вам значение в кавычках.
Если же вам нужно одно случайное значение из нескольких вариантов, в 87 строке замените существующий массив из переменной arrData на тот, что вам нужен.
![Image alt](https://github.com/Egoluback/changeprofilevk/raw/master/changeVkProfileScreen.png)

Usage:
First, install the Tampermonkey extension (https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ru).
Then go to https://openuserjs.org/scripts/Egoluback/Change_VK_profile and click the Install button.
Then click "Install".

After that, the script will already work, but with its settings. To edit its behavior, you need to go to the source code (click on the extension tampermonkey -> Control Panel -> Change VK profile).

To use the script you need only the last lines of code, namely 86+ lines.
To specify the first phrase (in the example - "Native planet") you need to replace the variable of 89 lines on the one that you need. Then, in line 93, correct isArr to false.
If you want the second phrase to contain one (not random) value, you do not need an array. In line 90 instead of "planets" enter the necessary value in quotes.
If you need one random value from several variants, replace the existing array from the variable arrData in line 87 with the one you need.
