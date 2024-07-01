<template>
	<div class="flex flex-col w-screen h-screen">
		<nav class="bg-orange-500 h-1/6 p-5 flex items-center justify-end">
			<button class="w-max h-max border-4 border-transparent active:rounded active:border-white">
				<svg xmlns="http://www.w3.org/2000/svg" height="80px" width="80px" viewBox="0 -960 960 960" fill="#FFEEDC">
					<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
				</svg>
			</button>
		</nav>

		<main class="h-full w-full flex justify-center items-center">
			<RouterView />
		</main>
	</div>
</template>