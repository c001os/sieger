<template>
    <footer class="bg-default text-default py-16 border-t border-default">
        <UContainer>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                <!-- Logo & Description -->
                <div class="flex flex-col items-center md:items-start gap-6">
                    <img
                        src="/media/logos/sieger_feher_logo.png"
                        alt="Sieger Logo"
                        class="h-16 w-auto invert dark:invert-0"
                    />
                    <p class="text-sm text-muted text-center md:text-left">Exkluzív környezet a campus szívében!</p>
                </div>

                <!-- Contact -->
                <div class="flex flex-col items-center md:items-start gap-4">
                    <h3 class="text-lg font-bold text-primary uppercase tracking-wider">{{ $t('footer.contact') }}</h3>
                    <div class="flex flex-col items-center md:items-start gap-2 text-sm text-default">
                        <span class="flex items-center gap-2"
                            ><img
                                src="/ikonok/lokacio_ikon_korben_feher.png"
                                alt="Cím"
                                class="w-4 h-4 object-contain"
                            />
                            9026 Győr, Egyetem tér 1.</span
                        >
                        <a
                            href="mailto:info@sieger.hu"
                            class="flex items-center gap-2 hover:text-primary transition-colors"
                            ><img
                                src="/ikonok/email_ikon_feher.png"
                                alt="Email"
                                class="w-4 h-4 object-contain"
                            />
                            info@sieger.hu</a
                        >
                        <a
                            href="tel:+36206156491"
                            class="flex items-center gap-2 hover:text-primary transition-colors"
                            ><img
                                src="/ikonok/telefon_ikon_feher.png"
                                alt="Telefon"
                                class="w-4 h-4 object-contain"
                            />
                            +36 20 615 6491</a
                        >
                    </div>
                </div>

                <!-- Hours -->
                <div class="flex flex-col items-center md:items-start gap-4">
                    <h3 class="text-lg font-bold text-primary uppercase tracking-wider">
                        {{ $t('footer.opening_hours') }}
                    </h3>
                    <ul class="text-sm text-default space-y-2 text-center md:text-left">
                        <li>
                            <span class="font-semibold">{{ $t('footer.monday') }}:</span> 11:00 – 17:00
                        </li>
                        <li>
                            <span class="font-semibold">{{ $t('footer.tue_sat') }}:</span> 11:00 – 00:00
                        </li>
                        <li>
                            <span class="font-semibold">{{ $t('footer.sunday') }}:</span>
                            <span class="text-error font-bold">{{ $t('footer.closed') }}</span>
                        </li>
                    </ul>
                </div>

                <!-- CTA & Socials -->
                <div class="flex flex-col items-center md:items-end gap-6 h-full justify-between">
                    <UButton
                        to="#booking"
                        size="xl"
                        color="white"
                        variant="solid"
                        class="hover:bg-primary hover:text-inverted hover:border-primary transition-all duration-300 rounded-none tracking-widest font-bold uppercase"
                    >
                        {{ $t('buttons.book_table') }}
                    </UButton>

                    <div class="flex flex-col items-center md:items-end gap-2 text-sm">
                        <span class="text-primary font-semibold tracking-widest">#siegersportbar</span>
                        <div class="flex gap-4 mt-2">
                            <NuxtLink
                                to="https://www.facebook.com/siegersportbar"
                                target="_blank"
                                class="text-muted hover:text-primary transition-colors"
                            >
                                <img
                                    src="/ikonok/facebook_ikon_feher.png"
                                    alt="Facebook"
                                    class="w-6 h-6 object-contain"
                                />
                            </NuxtLink>
                            <NuxtLink
                                to="https://www.instagram.com/siegersportbar/"
                                target="_blank"
                                class="text-muted hover:text-primary transition-colors"
                            >
                                <img
                                    src="/ikonok/instagram_ikon_feher.png"
                                    alt="Instagram"
                                    class="w-6 h-6 object-contain"
                                />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div
                class="mt-16 pt-8 border-t border-default flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted"
            >
                <p>{{ $t('footer.rights') }}</p>
                <NuxtLink
                    to="/adatvedelem"
                    class="hover:text-primary transition-colors"
                    >{{ $t('footer.privacy') }}</NuxtLink
                >
            </div>
        </UContainer>
    </footer>
</template>
