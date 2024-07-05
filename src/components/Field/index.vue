<script setup>
	let position = ["ATA", "MEI", "LAT", "ZAG", "GOL", "TEC"]
</script>

<template>
	<!-- <div class=" h-4/6 w-[26%] p-5"> -->
	<!-- <div class=" h-[72%] w-[30%] p-5"> -->
	<div class="w-[550px] h-[570px] p-5">
		<div class="relative h-full w-full bg-no-repeat bg-center bg-cover bg-[url(https://cartola.globo.com/dist/11.18.0/img/campinho-sem-borda.svg)]">
			<div class="transition-transform hover:scale-125 absolute top-12 left-36 flex justify-center items-center flex-col">
				<div class="h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[0] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute top-12 right-36 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[0] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute top-44 left-20 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[1] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute top-44 left-44 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[1] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute top-44 right-20 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[1] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute top-44 right-44 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[1] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute bottom-40 left-14 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[2] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute bottom-40 left-40 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[3] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute bottom-40 right-14 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[2] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute bottom-40 right-40 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[3] }}</h3>
			</div>
			<div class="transition-transform hover:scale-125 absolute inset-x-0 bottom-12 flex justify-center items-center flex-col">
				<div class=" h-10 w-10 border border-black rounded-full">
				</div>
				<h3 class="select-none">{{ position[4] }}</h3>
			</div>
		</div>
	</div>
</template>