/* This is a generator file for the JavaScript file that controls
   the index.js file which emulates the terminal 
   */

#include <stdio.h>
#include <stdlib.h>

int main () {
	FILE *fp = fopen("index1.js", "w+");
	FILE *fp2 = fopen("index2.js", "w+");
	fprintf(fp, "// Generated from generator.c \n\n\n");
	fprintf(fp, "var output = $('.output');\n");
	fprintf(fp, "var input = $('textarea.input');\n");
	fprintf(fp, "var toOutput;\n");
	fprintf(fp, "input.keypress(function(e) {\n\tif (e.which == 13) {\n");
	fprintf(fp, "\t\tvar inputVal = $.trim(input.val());\n");
	fprintf(fp, "\t\t");	
//escaped characters
// line breaks

	fprintf(fp2, "function separator() {\n");
	fprintf(fp2, "\tOutput('<span class=\"separator\">== == == == == == == == == == == == == == == == == ==</span></br>');");
	fprintf(fp2, "\n}\n\n");

	fprintf(fp2, "function Output(data) {\n");
	fprintf(fp2, "\t$(data).appendTo(output);");
	fprintf(fp2, "\n}\n\n");


	char command[10];
	char result[200];
	int lines = 0;
	int i = 0;
	char ch;

	printf("\nWelcome to the JS Code Generator for the Terminal Emulator!\n");
	printf("\nEnter X to exit.\n");

	while(1) {
		printf("\nPlease enter the command: ");
		scanf("%[^\n]s",command);
		getchar();

		if (command[0]=='X')
			break;

		fprintf(fp, "if (inputVal.indexOf(\"%s\")>=0) {\n", command);
		fprintf(fp, "\t\t\t%s();\n\t\t\tinput.Val('');\n", command);
		fprintf(fp, "\t\t} else ");

		printf("How many lines do you have in your response?");
		scanf("%d", &lines);
		getchar();

		fprintf(fp2,"function %s() {\n\tseparator();\n\t", command);
		fprintf(fp2,"var outputArray = ['>%s',", command);		
		for(i=0; i<lines; i++){
			printf("\nPlease enter line %d of the response:\n", i + 1);
			scanf("%[^\n]s",result);
			getchar();

			fprintf(fp2, "'%s',", result);
		}
		fseek(fp2, -1, SEEK_CUR);
		fprintf(fp2, "];\n\t");
		fprintf(fp2, "for (var  i = 0;  i < outputArray.length; i++) {\n\t\t");
		fprintf(fp2, "var out = '<span>' + outputArray[i] + '</span></br>';\n\t\t");
		fprintf(fp2, "Output(out);\n\t}\n\tseparator();\n}\n\n");


	}
	
	fprintf(fp, "{\n\t\t\tOutput('<span>Oops. <br>You outsmarted me. Try something else.</span></br>');");
	fprintf(fp, "\n\t\t\tinput.val('');\n\t\t}\n\t}\n});\n\n\n\n");

	rewind(fp);
	rewind(fp2);

	FILE *f = fopen("index3.js", "w+");
	while ((ch = fgetc(fp))!=EOF)
		fputc(ch,f);

	while ((ch = fgetc(fp2))!=EOF)
		fputc(ch,f);


	printf("Done!\n");

	fclose(fp);
	fclose(fp2);
	fclose(f);

	return 42;
}