import React, {useContext} from 'react';
import { BoxContainer, FormContainer, BoldLink, MutedLink, Input, SubmitButton } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';

export function LoginForm(props) {
	const { switchToSignup } = useContext(AccountContext);

	return (
	<BoxContainer>
		<FormContainer>
			<Input type="email" placeholder="E-mail"/>
			<Input type="password" placeholder="password"/>
		</FormContainer>

		<Marginer direction="vertical" margin={10}/>
			<MutedLink href="#">Forgot your password?</MutedLink>
			<Marginer direction="vertical" margin="1.5em"/>
			<SubmitButton type="submit">Signin</SubmitButton>
			<Marginer direction="vertical" margin="1em"/>
			<MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink>.</MutedLink>
	</BoxContainer>
	);
}