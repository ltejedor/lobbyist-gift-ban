def readFile(fileName, curYear, curPeriod):
  import xml.etree.ElementTree as ET
  import urllib.request
  lobbyists = {}
  registrants = {}
  xmlFile = ET.parse(urllib.request.urlopen(fileName))
#  xmlFile = ET.parse(fileName)
  root = xmlFile.getroot()
  for child in root:
    typ = child.attrib['Type']
    if 'QUARTER REPORT' not in typ or len(child) < 3: continue
    year = child.attrib['Year']
    if year != curYear: continue
    period = child.attrib['Period']
    if period != curPeriod: continue
    regName = child[0].attrib['RegistrantName'].upper()
    filID = child.attrib['ID']
    lobNames = []
    for lobbyist in child[2]:
      if 'LobbyistName' in lobbyist.attrib.keys():
        lobNames.append(lobbyist.attrib['LobbyistName'].upper())
    registrants[regName] = [(year, period, filID)]
    for name in lobNames:
      if name in lobbyists.keys():
        lobbyists[name].append((year, period, regName, filID))
      else:
        lobbyists[name] = [(year, period, regName, filID)]
  return registrants, lobbyists

def search(lobs):
  import re
  lobName = input('Enter lobbyist name (last, first): ').upper()
  print('Search for '+lobName)

  lobStr = ';'.join(lobs.keys())
  lobFound = bool(re.search(lobName, lobStr))
  allLobFound = re.findall(lobName, lobStr)
  ind = 0
  for i in range(len(allLobFound)):
    ind = lobStr.index(allLobFound[i], ind)
    startindex = ind
    for j in range(ind, -1, -1):
      if lobStr[j] == ';':
        startindex = j+1
        break
    endindex = lobStr.index(';', startindex)
    allLobFound[i] = lobStr[startindex:endindex]
    ind += 1
#  print(allLobFound)

  if not lobFound:
    print('\tLobbyist not found.')
    exit()

  print('\tLobbyist found.')
  for l in allLobFound:
    print(l)
    for obj in lobs[l]: print('\t'+str(obj))

def searchr(lobs):
  import re
  lobName = input('Enter registrant name (last, first): ').upper()
  print('Search for '+lobName)

  lobStr = ';'.join(lobs.keys())
  lobFound = bool(re.search(lobName, lobStr))
  allLobFound = re.findall(lobName, lobStr)
  ind = 0
  for i in range(len(allLobFound)):
    ind = lobStr.index(allLobFound[i], ind)
    startindex = ind
    for j in range(ind, -1, -1):
      if lobStr[j] == ';':
        startindex = j+1
        break
    else: startindex = 0
    endindex = lobStr.index(';', startindex)
    allLobFound[i] = lobStr[startindex:endindex]
    ind += 1

  if not lobFound:
    print('\tRegistrant not found.')
    exit()

  print('\tRegistrant found.')
  for l in allLobFound:
    print(l)

def main():
  curPeriod = '1st Quarter (Jan 1 - Mar 31)'
  curYear = '2014'
  regs = {}
  lobs = {}
  files = ['https://dl.dropboxusercontent.com/u/67470630/lobby/2014_2_4_1.xml', 'https://dl.dropboxusercontent.com/u/67470630/lobby/2014_2_4_2.xml']
  for i in files:
    r, l = readFile(i, curYear, curPeriod)
    regs.update(r)
    lobs.update(l)
  choice = input('Enter "L" to search lobbyists, "R" to search registrants: ').upper()
  if choice == 'L': search(lobs)
  elif choice == 'R': searchr(regs) 
  else: print('Choice not found.')

if __name__ == '__main__': main()
