// CLR.cpp : main project file.

#include "stdafx.h"
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <stdbool.h>

using namespace System;

static void gamesx(int xSIZEc, int xRANGEc, bool islotto, int ball)
{
	int GGGc[20] = { 0 };
	int hc = 0;
	int jc = 0;
	for (int u = 0; u < xSIZEc; u++)
	{
	for (int e = 0; e < xSIZEc; e++)
	{
		for (int x = 0; x < xSIZEc; x++)
		{
			for (int y = 0; y < xSIZEc; y++)
			{
				for (int z = 0; z < xSIZEc; z++)
				{
					if (hc == (GGGc[z]))
					{
						while (true)
						{
							jc = rand() % xRANGEc + 1;
							if (jc != GGGc[z])
							{
								hc = jc;
								break;
							}
						}
					}
				}
			}
			GGGc[x] = hc;
		}
		// GGGc[e] = hc;
	}
	// GGGc[u] = hc;
	}
	for (int zy = 0; zy < xSIZEc; zy++)
	{
		printf("%d = ", GGGc[zy]);
	}
	if (islotto == false)
	{
		printf("%d+ = ", rand() % ball + 1);
	}
}
static void numbersx(int xrange)
{
	int jhe = 0;
	int jhe1 = 0;
	for (int x = 0; x < xrange; x++)
	{
		jhe1 = rand() % 10;
		printf("%d = ", jhe1);
		jhe = jhe + jhe1;
	}
	printf("%d+ = ", jhe);
}

int main(array<System::String ^> ^args)
{
	//get time
	time_t rawtime;
	struct tm* timeinfo;
	time(&rawtime);
	timeinfo = localtime(&rawtime);
	// welcome text
	printf("#############################################################################\n");
	printf("New York Lottery v5.3 by a l C o P a U L[GIMO][As][aBrA][NPA][b8][BCVG][rRlf]\n");
	printf("#############################################################################\n\n");
	// day as seed
	srand(((timeinfo->tm_mon + 1) + (timeinfo->tm_mday)) * (timeinfo->tm_year + 1900));
	for (int i = 1; i < 7; i++)
	{
		switch (i)
		{
		case 1:
			gamesx(5, 70, false, 25);
			printf("MegaMillions\n\n");
			break;
		case 2:
			gamesx(5, 69, false, 26);
			printf("PowerBall\n\n");
			break;
		case 3:
			gamesx(6, 59, true, 0);
			printf("NY Lotto 1\n");
			gamesx(6, 59, true, 0);
			printf("NY Lotto 2\n\n");
			break;
		case 4:
			gamesx(5, 60, false, 4);
			printf("Cash4Life\n\n");
			break;
		case 5:
			gamesx(5, 39, true, 0);
			printf("Take 5\n\n");
			break;
		case 6:
			gamesx(10, 80, true, 0);
			printf("Pick 10\n\n");
			break;
		}

	}
	for (int i = 1; i < 5; i++)
	{
		switch (i)
		{
		case 1:
			numbersx(3);
			printf("[Midday] || ");
			break;
		case 2:
			numbersx(3);
			printf("[Evening] = Numbers\n\n");
			break;
		case 3:
			numbersx(4);
			printf("[Midday] || ");
			break;
		case 4:
			numbersx(4);
			printf("[Evening] = Win 4\n\n");
			break;
		}

	}
	gamesx(10, 80, true, 0);
	printf("QuickDraw\n\n");
	printf("#############################################################################\n");
    Console::Write("####################### < ]::Project Mercury::[> ############################\n");
	printf("#############################################################################");
    char y = getchar();
    return 0x11;
}
