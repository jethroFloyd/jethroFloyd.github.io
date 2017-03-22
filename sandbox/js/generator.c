/* This is a generator file for the JavaScript file that controls
   the index.js file which emulates the terminal 
   */

#include <stdio.h>
#include <stdlib.h>

int main () {
	FILE *fp = fopen("index2.js", "w+");
	fprintf(fp, "// Generated from generator.c \n\n\n");
	fprintf(fp, "var output = $('output');\n");
	fprintf(fp, "var input = $('textarea.input');\n");
	fprintf(fp, "var toOutput;\n");

	char command[10];
	char result[100];
	printf("\nWelcome to the JS Code Generator for the Terminal Emulator!\n");
	printf("\nPress CTRL+C to exit.\n");

	while(true) {
		printf("\nPlease enter the command:\t");
		scanf("%[^\n]s",command);
		
		printf("\nPlease enter the displayed result:\n");
		scanf("%[^\n]s",result);

	}
	



	fclose(fp);
	return 42;
}