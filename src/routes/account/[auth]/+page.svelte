<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/ui/button';

	import { Input } from '$lib/ui/input';
	import { Label } from '$lib/ui/label';
	import { cn } from '$lib/ui/utils';
	import { Loader2, ArrowUpRightFromSquare } from 'lucide-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<div
	class="container relative grid h-screen flex-col place-content-center items-center justify-center lg:max-w-none lg:px-0"
>
	<Button
		href={$page.params.auth === 'sign-in' ? '/account/sign-up' : '/account/sign-in'}
		variant="ghost"
		class="absolute right-4 top-4 md:right-8 md:top-8"
	>
		{$page.params.auth === 'sign-in' ? 'Sign Up' : 'Sign In'}
	</Button>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					{#if $page.params.auth === 'sign-in'}
						Sign in to your account
					{:else}
						Create an account
					{/if}
				</h1>
				<p class="text-sm text-muted-foreground">
					Enter your email below to continue. You will receive a magic link via email.
				</p>
			</div>
			<div class={cn('grid gap-6', className)} {...$$restProps}>
				<form on:submit|preventDefault={onSubmit}>
					<div class="grid gap-2">
						<div class="grid gap-1">
							<Label class="sr-only" for="email">Email</Label>
							<Input
								id="email"
								placeholder="name@example.com"
								type="email"
								autocapitalize="none"
								autocomplete="email"
								autocorrect="off"
								disabled={isLoading}
							/>
						</div>
						<Button type="submit" disabled={isLoading}>
							{#if isLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Sign In with Email
						</Button>
					</div>
				</form>
				<div class="relative">
					<div class="absolute inset-0 flex items-center">
						<span class="w-full border-t" />
					</div>
					<div class="relative flex justify-center text-xs uppercase">
						<span class="bg-background px-2 text-muted-foreground"> Or continue with </span>
					</div>
				</div>
				<Button variant="outline" type="button" disabled={isLoading}>
					<svg class="mr-2 h-4 w-4 text-foreground" viewBox="0 0 496 512"
						><path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						/></svg
					>
					GitHub
				</Button>
			</div>
			<p
				class={cn(
					'px-8 text-center text-sm text-muted-foreground',
					$page.params.auth === 'sign-in' && 'hidden'
				)}
			>
				By clicking continue, you agree to our
				<a href="/terms" class="text-primary underline underline-offset-4">
					Terms of Service
					<ArrowUpRightFromSquare class="inline-block h-3 w-3" />
				</a>
				and
				<a href="/privacy" class="text-primary underline underline-offset-4">
					Privacy Policy
					<ArrowUpRightFromSquare class="inline-block h-3 w-3" />
				</a>
				.
			</p>
		</div>
	</div>
</div>
