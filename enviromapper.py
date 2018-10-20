#!/usr/bin/env python3

import re
import pandas as pd
globe_file = 'GLOBEMeasurementData-9252.csv'
colnames = ['latitude', 'longitude', 'measured_on', 'nitrates:nitrate and nitrite']
df_ndata = pd.read_csv(globe_file, sep=',', usecols=colnames)
j_data = df_ndata.to_json()
print(j_data[0, 300])


# if __name__ == "__main__":
#     import argparse
#
#     parser = argparse.ArgumentParser(
#         description='get data from map to return nitrate data')
#     parser.add_argument('year', type=int, help='year')

