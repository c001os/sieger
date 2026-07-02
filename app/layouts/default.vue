<template>
    <div class="min-h-screen bg-default text-default font-sans selection:bg-primary selection:text-inverted">
        <AppHeader />
        <main class="pt-20">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
